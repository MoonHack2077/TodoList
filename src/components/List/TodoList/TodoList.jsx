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
    new Task({title: 'Learn React', description: 'xs', id: id++})
]
// console.log( tasks.findIndex(idx => idx.id===0) )
function TodoList(){
    return (
        <table class="table table-striped" id="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">
                <div class="d-flex justify-content-center">
                  Completed
                </div>
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Learn JS
              </td>
              <td>
                Watch Javascript tutorials on Youtube
              </td>
              <td class="text-center">
                <input type="checkbox"/>
              </td>
              <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
                <button class="btn btn-danger mb-1 ml-1">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

    )
        {/* <section className='TodoList-container'>
        //         <ul className='TodoList-container-xd' >
        //             <li className='indicators' key='indicators'>
        //                 <span className='indicator'>Title</span>
        //                 <span className='indicator'>Description</span>
        //                 <span className='indicator'>Completed</span>
        //             </li>
        //             {tasks.map( task => <li className='todo' id={task.id}><TodoItem key={task.id} title={task.title} description={task.description}/></li> )}
        //         </ul>
                
        //     {<ul className='TodoList'>
        //         {tasks.map( task => <TodoItem id={task.id} key={task.id} text={task.name}  /> )}
        //     </ul> }
        // </section> */}
    
}

export { TodoList, tasks }