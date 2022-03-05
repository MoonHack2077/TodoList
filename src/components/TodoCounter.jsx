import React from 'react';
import '../index.css';
import { tasks } from './TodoList'

function TodoCounter(){
  const tasksDone = tasks.filter( task=> task.done===true )
    return(
      <h2 className='TodoCounter'>I have done {tasksDone.length} of 3 todos</h2>
    )
}

export { TodoCounter }