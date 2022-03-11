import React from 'react'
import './CreateButton.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'

function CreateTodoButton({onClick}){
    return (
      <div className='CreateTodoButton' onClick={onClick} >
        {/* <FontAwesomeIcon icon={faPlus} className='add'/> */}
        <input type='button' value='Add' className='add' />
      </div>
    )
}



export { CreateTodoButton }