import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({task}) => {

    useEffect(() => {
      console.log('tarea creada')
    
      return () => {
        console.log(`la tarea : ${task.name} esta por terminar`);
      }
    }, [task])
    
    
    return (
        <div>
            <h2>
                NOMBRE: { task.name }
            </h2>
            <h3>
                descripcion: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                esta tarea es: { task.completed ? 'COMPLETED' : 'PENDINDG' }
            </h5>

            
        </div>
    );
};


TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Task)
};


export default TaskComponent;
