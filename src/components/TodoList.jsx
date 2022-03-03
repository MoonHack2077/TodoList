import React from 'react'
import '../index.css';
import { TodoItem } from './TodoItem.jsx'

const tasks = [
    { text: 'task 1', done: false },
    { text: 'task 2', done: false },
    { text: 'task 3', done: false },
    { text: 'task 4', done: false },
    { text: 'task 5', done: false },
    { text: 'task 6', done: false },
    { text: 'task 7', done: false },
    { text: 'task 8', done: false }
]

function TodoList(){
    return (
        <section>
            <ul className='TodoList'>
                {tasks.map( task => <TodoItem key={task.text} text={task.text}/> )}
            </ul>
        </section>
    )
}

export { TodoList }