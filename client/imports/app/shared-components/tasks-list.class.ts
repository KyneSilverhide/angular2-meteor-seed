import {OnDestroy, OnInit} from "@angular/core";
import {Observable, Subscription, Subject} from "rxjs";
import {Task} from "../../../../both/models/task.model";
import {PaginationService} from "ng2-pagination";
import {MeteorObservable} from "meteor-rxjs";
import {Tasks} from "../../../../both/collections/tasks.collection";
import {Counts} from "meteor/tmeasday:publish-counts";
import {InjectUser} from "angular2-meteor-accounts-ui";

interface Pagination {
    limit: number;
    skip: number;
}

interface Options extends Pagination {
    [key: string]: any
}

@InjectUser('user')
export class TasksList implements OnInit, OnDestroy {
    tasks: Observable<Task[]>;
    tasksSub: Subscription;
    pageSize: Subject<number> = new Subject<number>();
    curPage: Subject<number> = new Subject<number>();
    nameOrder: Subject<number> = new Subject<number>();
    optionsSub: Subscription;
    tasksSize: number = 0;
    autorunSub: Subscription;
    user: Meteor.User;
    constructor(private paginationService: PaginationService) {

    }

    ngOnInit() {
        this.optionsSub = Observable.combineLatest(
            this.pageSize,
            this.curPage,
            this.nameOrder
        ).subscribe(([pageSize, curPage, nameOrder]) => {
            const options: Options = {
                limit: pageSize as number,
                skip: ((curPage as number) - 1) * (pageSize as number),
                sort: { name: nameOrder as number }
            };

            this.paginationService.setCurrentPage(this.paginationService.defaultId, curPage as number);

            if (this.tasksSub) {
                this.tasksSub.unsubscribe();
            }

            this.tasksSub = MeteorObservable.subscribe('tasks', options, location).subscribe(() => {
                this.tasks = Tasks.find({}, {
                    sort: {
                        name: nameOrder
                    }
                }).zone();
            });
        });

        this.paginationService.register({
            id: this.paginationService.defaultId,
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.tasksSize
        });

        this.pageSize.next(10);
        this.curPage.next(1);
        this.nameOrder.next(1);

        this.autorunSub = MeteorObservable.autorun().subscribe(() => {
            this.tasksSize = Counts.get('numberOfTasks');
            this.paginationService.setTotalItems(this.paginationService.defaultId, this.tasksSize);
        });
    }

    removeTask(task: Task): void {
        Tasks.remove(task._id);
    }

    search(value: string): void {
        this.curPage.next(1);
    }

    onPageChanged(page: number): void {
        this.curPage.next(page);
    }

    changeSortOrder(nameOrder: string): void {
        this.nameOrder.next(parseInt(nameOrder));
    }

    ngOnDestroy() {
        this.tasksSub.unsubscribe();
        this.optionsSub.unsubscribe();
        this.autorunSub.unsubscribe();
    }
}
