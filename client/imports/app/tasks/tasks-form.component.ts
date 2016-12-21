import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tasks } from '../../../../both/collections/tasks.collection';
import { InjectUser } from "angular2-meteor-accounts-ui";
import template from './tasks-form.component.html';
import style from './tasks-form.component.scss';

@Component({
    selector: 'tasks-form',
    template,
    styles: [style]
})
@InjectUser("user")
export class TasksFormComponent implements OnInit {
    addForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            name: ['', Validators.required],
            done: [false]
        });
    }

    addTask(): void {
        if (!Meteor.userId()) {
            alert('Please log in to add a task');
            return;
        }

        if (this.addForm.valid) {
            Tasks.insert({
                name: this.addForm.value.name,
                done: this.addForm.value.done
            });

            this.addForm.reset();
        }
    }
}
