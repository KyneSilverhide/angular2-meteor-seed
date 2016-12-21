import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { Task } from '../models/task.model';

export const Tasks = new MongoObservable.Collection<Task>('tasks');

function loggedIn() {
  return !!Meteor.user();
}

Tasks.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
