import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'


function TodoItem(props){
    return (
        <li className='TodoItem'>
            <FontAwesomeIcon icon={faTrash} className='icon trash'/>
            <div>
                <p>{props.text}</p>
            </div>
            <FontAwesomeIcon icon={faCheck} className='icon check'/>
        </li>
    )
}

export { TodoItem }