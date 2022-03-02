import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';

function TodoItem(props){
    return (
          <li className='TodoItem'><FontAwesomeIcon icon="fa-solid fa-trash" />{props.text}<FontAwesomeIcon icon="fa-solid fa-check" /></li>
    )
}

export { TodoItem }