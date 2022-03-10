import React from 'react';
import './TodoList.css';
import { TodoItem } from '../TodoItem/TodoItem.jsx';
// import { NavList } from '../NavList/NavList.jsx';
import { Task } from '../../../Task';

// function randomId(){
//     return Math.floor(Math.random() * 200);
// }

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
    return (
        <table className="table" id="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">
                <div className="d-flex justify-content-center">
                  Completed
                </div>
              </th>
              <th scope="col"></th>
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
            {tasks.map(task=><TodoItem id={task.id} title={task.title} description={task.description}/>)}
          </tbody>
        </table>

    )
        {/* <section classNameName='TodoList-container'>
        //         <ul classNameName='TodoList-container-xd' >
        //             <li classNameName='indicators' key='indicators'>
        //                 <span classNameName='indicator'>Title</span>
        //                 <span classNameName='indicator'>Description</span>
        //                 <span classNameName='indicator'>Completed</span>
        //             </li>
        //             {tasks.map( task => <li classNameName='todo' id={task.id}><TodoItem key={task.id} title={task.title} description={task.description}/></li> )}
        //         </ul>
                
        //     {<ul classNameName='TodoList'>
        //         {tasks.map( task => <TodoItem id={task.id} key={task.id} text={task.name}  /> )}
        //     </ul> }
        // </section> */}
    
}

export { TodoList, tasks }