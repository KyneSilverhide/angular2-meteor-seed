import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AppComponent } from "./app.component";
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { TASKS_DECLARATIONS } from './tasks';
import { SHARED_DECLARATIONS } from './shared';
import { MaterialModule } from "@angular/material";
import { AUTH_DECLARATIONS } from "./auth/index";

let moduleDefinition = {
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AccountsModule,
        Ng2PaginationModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        ...TASKS_DECLARATIONS,
        ...SHARED_DECLARATIONS,
        ...AUTH_DECLARATIONS
    ],
    providers: [
        ...ROUTES_PROVIDERS
    ],
    bootstrap: [
        AppComponent
    ]
}

@NgModule(moduleDefinition)
export class AppModule { }
