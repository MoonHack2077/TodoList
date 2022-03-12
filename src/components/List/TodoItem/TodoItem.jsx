import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function TodoItem({id, title, description,done, onChange,onClick}){
    const edit = () => console.log('edit xd');
    // const [check,setCheck] = React.useState(done);

    return (
        <React.Fragment>
            <tr id={id} className='TodoItem'>
              <td >
                {title}
              </td>
              <td >
                {description}
              </td>
              <td >
                <input type="checkbox" checked={done} onChange={() => onChange(id)}/>
              </td>
              <td >
              
                <button 
                  className='icon check' 
                  onClick={edit}
                  ><FontAwesomeIcon icon={faPencilAlt}/>
                </button>
                <button 
                  className='icon trash' 
                  onClick={() => onClick(id)}
                  ><FontAwesomeIcon icon={faTrash}/>
                </button>

              </td>
            </tr>
        </React.Fragment>
    )
}

export { TodoItem }