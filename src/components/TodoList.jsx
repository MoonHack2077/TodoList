import React from 'react';
import '../index.css';
import { TodoItem } from './TodoItem.jsx';
import { Task } from '../Task';

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
            <ul className='TodoList'>
                {tasks.map( task => <TodoItem id={task.id} key={task.id} text={task.name}  /> )}
            </ul>
        </section>
    )
}

export { TodoList, tasks }