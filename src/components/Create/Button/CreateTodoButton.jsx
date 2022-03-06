import React from 'react'
import './CreateButton.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'

function CreateTodoButton(){
  const add = ()=>{
    console.log('click xd')
  }
  
    return (
      <div className='CreateTodoButton' onClick={add} >
        {/* <FontAwesomeIcon icon={faPlus} className='add'/> */}
        <input type='button' value='Add' className='add' />
      </div>
    )
}



export { CreateTodoButton }