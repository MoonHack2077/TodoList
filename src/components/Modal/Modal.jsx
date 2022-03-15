import React from 'react';
import { Detail } from '../Create/Detail/Detail.jsx';
import './Modal.css';

function Modal({ titleValue, titleChange, descriptionValue, descriptionChange }){
    return(
        <div className='Modal'>
            <div className='modal-edit'>
                <div className="set">
                    <h1>Edit your todo</h1>
                    <Detail info='Title' placeholder='Edit the title' value={titleValue} onChange={titleChange}/>
                    <Detail info='Description' placeholder='Edit the Description' value={descriptionValue} onChange={descriptionChange}/>
                </div>
               <div className='completed'>
                    <label htmlFor="">Completed?</label>
                    <input type="checkbox"/>
                </div> 
                <div className='save'>
                    <input type="button" value="Save" />
                </div>
            </div>
        </div>
    )
}

export { Modal }