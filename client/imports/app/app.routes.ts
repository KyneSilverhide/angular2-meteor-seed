import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { TasksListComponent } from './tasks/tasks-list.component';
import { TaskDetailsComponent } from './tasks/task-details.component';
import {SignupComponent} from "./auth/signup.component";
import {RecoverComponent} from "./auth/recover.component";
import {LoginComponent} from "./auth/login.component.web";

export const routes: Route[] = [
    { path: '', component: TasksListComponent },
    { path: 'task/:taskId', component: TaskDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'recover', component: RecoverComponent }
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !!Meteor.userId()
}];
