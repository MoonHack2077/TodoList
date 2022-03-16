import React from 'react';
import { Detail } from '../Create/Detail/Detail.jsx';
import './Modal.css';

function Modal({ hide, onClick }){
    return(
        <div className={`Modal ${hide && 'none'}`}>
            <div className='modal-edit'>
                <div className="set">
                    <h1>Edit your todo</h1>
                    <Detail info='Title' placeholder='Edit the title' />
                    <Detail info='Description' placeholder='Edit the Description' />
                </div>
               <div className='completed'>
                    <label htmlFor="">Completed?</label>
                    <input type="checkbox"/>
                </div> 
                <div className='save'>
                    <input type="button" value="Save" onClick={onClick}/>
                </div>
            </div>
        </div>
    )
}

export { Modal }