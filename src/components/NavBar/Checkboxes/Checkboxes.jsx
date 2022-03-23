import React from 'react';
import './Checkboxes.css';

function Checkboxes({ info , onClick }){
    return(
        <div>
            <input 
                className='checkbox-filter' 
                onClick={ e => onClick( e.target ) } 
                type='checkbox' 
                id={ info }
            />
            <label className='checkboxes-label' htmlFor={ info }>{ info }</label>
        </div>
    )
}

export { Checkboxes }