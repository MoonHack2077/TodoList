import React from 'react'
import './CreateButton.css';

function CreateTodoButton({onClick}){
    return (
      <div className='CreateTodoButton' onClick={onClick} >
        <input type='button' value='Add' className='add' />
      </div>
    )
}



export { CreateTodoButton }