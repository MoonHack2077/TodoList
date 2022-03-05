import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'


// let checked = false;

function TodoItem(props){
    const check = e => e.target.classList.toggle('icon-check');
    const remove = () => console.log('remove .-.');

    return (
        <li id={props.id} className='TodoItem' >
            <FontAwesomeIcon icon={faTrash} className='icon trash' onClick={remove} />
            <div>
                <p>{props.text}</p>
            </div>
            <FontAwesomeIcon icon={faCheck} className={`icon check`} onClick={e => check(e)} />
        </li>
    )
}

export { TodoItem }