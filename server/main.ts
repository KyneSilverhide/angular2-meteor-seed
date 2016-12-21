import { Meteor } from 'meteor/meteor';
import { loadTasks } from './imports/fixtures/tasks';
import './imports/publications/tasks';
import '../both/methods/tasks.methods';

Meteor.startup(() => {
    loadTasks();
});
