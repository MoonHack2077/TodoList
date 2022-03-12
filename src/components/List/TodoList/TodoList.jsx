import React from 'react';
import './TodoList.css';
import { TodoItem } from '../TodoItem/TodoItem.jsx';


function TodoList({tasks=[], onChange, onClick}){
    return (
        <table className="table" id="table">
          <thead>
            <tr>
              <th >Title</th>
              <th >Description</th>
              <th >
                <div className="d-flex justify-content-center">
                  Completed
                </div>
              </th>
            </tr>
          </thead>
          <tbody>                     

            {tasks.map(task=>
            <TodoItem key={task.id} 
              id={task.id} 
              title={task.title}
              description={task.description} 
              onChange={onChange}
              onClick={onClick}
             />)}

          </tbody>
        </table>
    )
    
}

export { TodoList }