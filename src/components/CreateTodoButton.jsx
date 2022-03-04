import React from 'react'
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function CreateTodoButton(){
    return (
      <div className='CreateTodoButton'>
        <FontAwesomeIcon icon={faPlus} className='add'/>
      </div>
    )
}



export { CreateTodoButton }