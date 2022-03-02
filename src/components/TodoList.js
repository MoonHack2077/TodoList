import React from 'react'
import '../index.css';
import { TodoItem } from './TodoItem.js'

const tasks = [
    { text: 'task 1', done: false },
    { text: 'task 2', done: false },
    { text: 'task 3', done: false },
    { text: 'task 4', done: false }
]

function TodoList(){
    return (
      <ul className='TodoList'>
          {tasks.map( task => <TodoItem key={task.text} text={task.text}/> )}
      </ul>
    )
}

export { TodoList }