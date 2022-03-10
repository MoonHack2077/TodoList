import React from 'react';
import './TodoList.css';
import { TodoItem } from '../TodoItem/TodoItem.jsx';
// import { NavList } from '../NavList/NavList.jsx';
import { Task } from '../../../Task';

let id = 1;
// const task={
//     id: null,
//     title:null,
//     description: null,
//     completed: null
// }
const tasks = [
    new Task({title: 'Learn React', description: 'xs', id: id++}),
    new Task({title: 'Learn React', description: 'xs', id: id++}),
    new Task({title: 'Learn React', description: 'xs', id: id++}),
    new Task({title: 'Learn React', description: 'xs', id: id++}),
    new Task({title: 'Learn React', description: 'xs', id: id++}),
    new Task({title: 'Learn React', description: 'xs', id: id++})
]
// console.log( tasks.findIndex(idx => idx.id===0) )
function TodoList(){
  const [todos, setTodos] = React.useState(tasks)
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
            <tr>
              <td className="text-center">
                Learn JS
              </td>
              <td className="text-center">
                Watch Javascript tutorials on Youtube
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-right">
                <button className="btn btn-primary mb-1">
                  <i className="fa fa-pencil"></i>
                </button>
                <button className="btn btn-danger mb-1 ml-1">
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            {todos.map(task=><TodoItem key={task.id} id={task.id} title={task.title} description={task.description}/>)}
          </tbody>
        </table>

    )
    
}

export { TodoList, tasks }