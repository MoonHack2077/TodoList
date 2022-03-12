import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function TodoItem({id, title, description, onChange,onClick}){
    const edit = () => console.log('edit xd');

    return (
        <React.Fragment>
            <tr id={id} className={`TodoItem ${id%2!==0 && 'gray'}`}>
              <td className="text-center">
                {title}
              </td>
              <td className="text-center">
                {description}
              </td>
              <td className="text-center">
                <input type="checkbox" onChange={()=>onChange(id)}/>
              </td>
              <td className="text-center">
                <button className='icon check' onClick={edit}><FontAwesomeIcon icon={faPencilAlt} /></button>
                <button className='icon trash' onClick={()=>onClick(id)}><FontAwesomeIcon icon={faTrash} /></button>
              </td>
            </tr>
        </React.Fragment>
    )
}

export { TodoItem }