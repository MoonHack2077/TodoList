import React from 'react';
import './TodoList.css';
import { TodoItem } from '../TodoItem/TodoItem.jsx';


function TodoList({todos=[], toggleCheck, onClick}){
    return (
        <table className="table" id="table">
          <thead>
            <tr>
              <th >Title </th>
              <th >Description </th>
              <th >
                <div > Completed  </div>
              </th>
            </tr>
          </thead>
          <tbody>                     

            {todos.map(todo=>
            <TodoItem
              key = { todo.id }
              id = { todo.id }  
              title = { todo.title }
              description = {todo.description } 
              done = { todo.done }
              hide = { todo.hide }
              toggleCheck = { toggleCheck }
              onClick = { onClick }
             />)}

          </tbody>
        </table>
    )   
}

export { TodoList }