import React from 'react';
import './SetValues.css';

function SetValues({ placeholder, info, onChange, value , className}){
    return (
        <input 
            className={ className } 
            placeholder={ placeholder } 
            value={ value } 
            id={ info }
            onChange={ onChange }
        />
    )
}

export { SetValues } 