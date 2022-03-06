import React from 'react';
import './TodoList.css';
import { TodoItem } from '../TodoItem/TodoItem.jsx';
import { NavList } from '../NavList/NavList.jsx';
import { Task } from '../../../Task';

// function randomId(){
//     return Math.floor(Math.random() * 200);
// }

let id = 1;
const tasks = [
    new Task('Learn React', id++, true),
    new Task('Learn Sass',id++, true),
    new Task('el epep',id++, false)
]
// console.log( tasks.findIndex(idx => idx.id===0) )
function TodoList(){

    return (
        <section>
            <NavList/>
            <ul className='TodoList'>
                {tasks.map( task => <TodoItem id={task.id} key={task.id} text={task.name}  /> )}
            </ul>
        </section>
    )
}

export { TodoList, tasks }