import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';


function TodoItem({ id, title, description, done, hide, onClick }){
  
    const { remove , edit , toggleCheck } = onClick(id);

    return (
        <React.Fragment>
            <tr id={ id } className={`TodoItem ${hide && 'none'}`}>
              <td >
                { title }
              </td>
              <td >
                { description }
              </td>
              <td >
                <input type="checkbox" checked={ done } onChange={ () => toggleCheck(id) }/>
              </td>
              <td >
              
                <button 
                  className='icon check' 
                  onClick= { () => edit(id)  }
                  ><FontAwesomeIcon icon= {faPencilAlt}/>
                </button>
                <button 
                  className='icon trash' 
                  onClick= { () => remove(id) }
                  ><FontAwesomeIcon icon= { faTrash }/>
                </button>

              </td>
            </tr>
        </React.Fragment>
    )
}

export { TodoItem }