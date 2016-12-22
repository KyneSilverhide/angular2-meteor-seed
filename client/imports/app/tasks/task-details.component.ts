import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { InjectUser } from "angular2-meteor-accounts-ui";

import 'rxjs/add/operator/map';

import { Tasks } from '../../../../both/collections/tasks.collection';
import { Task } from '../../../../both/models/task.model';
import { Users } from '../../../../both/collections/users.collection';
import { User } from '../../../../both/models/user.model';

import template from './task-details.component.html';
import style from './task.component.scss';

@Component({
    selector: 'task-details',
    template,
    styles: [style]
})
@InjectUser('user')
export class TaskDetailsComponent implements OnInit, OnDestroy {
    taskId: string;
    paramsSub: Subscription;
    task: Task;
    taskSub: Subscription;
    user: Meteor.User;

    constructor(private route: ActivatedRoute, private router:Router) { }

    ngOnInit() {
        this.paramsSub = this.route.params
            .map(params => params['taskId'])
            .subscribe(taskId => {
                this.taskId = taskId;

                if (this.taskSub) {
                    this.taskSub.unsubscribe();
                }

                this.taskSub = MeteorObservable.subscribe('task', this.taskId).subscribe(() => {
                    MeteorObservable.autorun().subscribe(() => {
                        this.task = Tasks.findOne(this.taskId);
                    });
                });
            });
    }

    saveTask() {
        if (!Meteor.userId()) {
            alert('Please log in to change this task');
            return;
        }

        Tasks.update(this.task._id, {
            $set: {
                name: this.task.name,
                done: this.task.done
            }
        }).subscribe(this.router.navigate(['/']));
    }

    dummy() {
        MeteorObservable.call('dummy', this.task._id, Meteor.userId()).subscribe(() => {
            console.log('Dummy success');
        }, (error) => {
            alert(`Dummy error : ${error}`);
        });
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
        this.taskSub.unsubscribe();
    }
}
