import React from 'react'
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function CreateTodoButton(){
  const add = ()=>{
    console.log('click xd')
  }
  
    return (
      <div className='CreateTodoButton' onClick={add} >
        <FontAwesomeIcon icon={faPlus} className='add'/>
      </div>
    )
}



export { CreateTodoButton }