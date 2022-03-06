import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'


function TodoItem(props){
    const check = e => {
        console.log(e.target);
        console.log(e.target.parentElement);
        const target = e.target;
        const parent = target.parentElement

        if(target.classList.contains('icon-check')){
            target.classList.remove('icon-check');
            parent.classList.remove('icon-check');
        }else{
            target.classList.remove('icon-check');
            parent.classList.remove('icon-check');
        }
        // document.getElementById(`${e.target.parentElement.id}`).classList.toggle('icon-check');
    };
    const remove = () => console.log('remove .-.');

    return (
        <li id={props.id} className='TodoItem' >
            <div>
                <FontAwesomeIcon icon={faTrash} className='icon trash' onClick={remove} />
            </div>
            <div>
                <p className='text' >{props.text}</p>
            </div>
            <div className='icontainer' onClick={check}>
                <FontAwesomeIcon icon={faCheck} className={`icon check`}/>
            </div>
        </li>
    )
}

export { TodoItem }