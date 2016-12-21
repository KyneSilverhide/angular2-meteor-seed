import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import { Tasks } from '../../../both/collections/tasks.collection';

interface Options {
    [key: string]: any;
}

Meteor.publish('tasks', function(options: Options, name?: string) {
    const selector = buildQuery.call(this, null, name);
    Counts.publish(this, 'numberOfTasks', Tasks.collection.find(selector), { noReady: true });
    return Tasks.find(selector, options);
});

Meteor.publish('task', function(taskId: string) {
    return Tasks.find(buildQuery.call(this, taskId));
});

function buildQuery(taskId?: string, name?: string): Object {
    if (taskId) {
        return {
            _id: taskId
        };
    }

    const searchRegEx = { '$regex': '.*' + (name || '') + '.*', '$options': 'i' };
    return {
        'name': searchRegEx
    };
}
