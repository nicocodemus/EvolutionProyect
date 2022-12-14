import React,{ useState,useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pures/task';

const TaskListComponent = () => {
    
    const defaultTask = new Task('Example','default description',false,LEVELS.NORMAL);
    //EStado del componente
    const [tasks, setTasks] = useState([defaultTask]);

    const [loading, setLoading] = useState(true);
    //control del ciclo de vida del componente 

    useEffect(() => {
      console.log('modificacion de tareas')

      setLoading(false);
    
      return () => {
        console.log('la tasklist esta por destruirse..')
      }
    }, [tasks])
    

    

    

    const changeCompleted=(id)=>{
        console.log('pendiente: cambiar estado de una tarea');
    }


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
