import {Tasks} from '../collections/tasks.collection';
import {check} from 'meteor/check';
import {Meteor} from 'meteor/meteor';

Meteor.methods({
    dummy: function(taskId: string, userId: string) {
        check(taskId, String);
        check(userId, String);
    }
});
