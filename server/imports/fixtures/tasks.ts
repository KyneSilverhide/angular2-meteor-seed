import { Tasks } from '../../../both/collections/tasks.collection';
import { Task } from '../../../both/models/task.model';

export function loadTasks() {
    if (Tasks.find().cursor.count() === 0) {
        const tasks: Task[] = [
            {
                name: 'Run this meteor project',
                done: true,
            }, {
                name: 'Customise and add models',
                done: false,
            }, {
                name: 'Customize and add views',
                done: false,
            }, {
                name: 'Use social authentication',
                done: false,
            }
        ];
        tasks.forEach((task: Task) => Tasks.insert(task));
    }
}
