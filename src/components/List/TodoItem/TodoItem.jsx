import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'


function TodoItem({id, title, description}){
    const remove = () => console.log('remove .-.');
    const edit = () => console.log('edit xd');

    return (
        // <div className='TodoItem' id={id}>
            
        //     <div>
        //         <p className='text' >{title}</p>
        //     </div>
            
        //     <div>
        //         <p className='text' >{description}</p>
        //     </div>
            
        //     <div>
        //         <input type='checkbox' />
        //     </div>
        //     <div>
        //         <button onClick={remove}><FontAwesomeIcon icon={faPencilAlt} /></button>
        //         <button onClick={edit}><FontAwesomeIcon icon={faTrash} className='icon trash'/></button>
        //     </div>
            
        // </div>

        <React.Fragment>
            <tr id={id} className='TodoItem'>
              <td>
                {title}
              </td>
              <td>
                {description}
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td class="text-right">
                <button onClick={remove}><FontAwesomeIcon icon={faPencilAlt} /></button>
                <button onClick={edit}><FontAwesomeIcon icon={faTrash} className='icon trash'/></button>
              </td>
            </tr>
        </React.Fragment>
    )
}

export { TodoItem }