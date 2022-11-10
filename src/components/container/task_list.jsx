import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pures/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example','default description',false,LEVELS.NORMAL);
    return (
        <div>
            <div>
                your task:
            </div>
            {/*aplicar un for o map para renderizar la lista de tareas*/}
            <TaskComponent task={ defaultTask } ></TaskComponent>
        </div>
    );
}

export default TaskListComponent;
