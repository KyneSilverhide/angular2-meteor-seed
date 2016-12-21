import { Component } from '@angular/core';
import { PaginationService } from 'ng2-pagination';
import { TasksList } from "../shared-components/tasks-list.class";

import template from './tasks-list.component.html';
import style from './tasks-list.component.scss';

@Component({
    selector: 'tasks-list',
    template,
    styles: [style]
})
export class TasksListComponent extends TasksList {
    constructor(paginationService: PaginationService) {
        super(paginationService);
    }
}
