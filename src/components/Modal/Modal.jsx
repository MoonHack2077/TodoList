import React from 'react';
import { Detail } from '../Create/Detail/Detail.jsx';
import { Alert } from '../Alert/Alert.jsx';
import { BtnSet } from '../Create/Button/BtnSet.jsx';
import { Checkbox } from '../NavBar/Checkbox/Checkbox.jsx';
import './Modal.css';

function Modal({ 
    hideModal, 
    hideAlertModal,
    onClick, 
    titleValue,
    titleChange, 
    descriptionValue,
    descriptionChange, 
    completed
}){
    const { toggleCompleted , setNewValues } = onClick();

    return(
        <div className={`Modal ${ hideModal && 'none' }`}>
            <div className='modal-edit'>
                <div className="set">
                    <h1>Edit your todo</h1>
                    <Detail 
                        info='Title'
                        placeholder='Edit the title' 
                        value={ titleValue } 
                        onChange={ titleChange } 
                    />
                    <Detail 
                        info='Description' 
                        placeholder='Edit the Description' 
                        value={ descriptionValue } 
                        onChange={ descriptionChange }
                    />
                </div>
                <div className='check_save'>
                    <Checkbox 
                        info='Completed' 
                        checked={ completed }
                        onClick={ () => toggleCompleted() } 
                    />
                    <BtnSet 
                        className='btn-set inputs_config'
                        value="Save" 
                        onClick={ () => setNewValues() }
                    />
                </div>
                <Alert 
                    className='Alert-Modal'
                    message='Title and description are required!!' 
                    hide={ hideAlertModal }  
                />
            </div>
        </div>
    )
}

export { Modal }