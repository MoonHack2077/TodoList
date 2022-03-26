import React from 'react';
import './Checkbox.css';

function Checkbox({ info , onClick , checked}){
    return(
        <div>
            <input 
                type='checkbox' 
                className='checkbox-filter' 
                onChange={ e => onClick( e.target ) } 
                checked={ checked }
                id={ info }
            />
            <label className='Checkbox-label' htmlFor={ info }>{ info }</label>
        </div>
    )
}

export { Checkbox }