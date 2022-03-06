import React from 'react';
import './Checkboxes.css'

function Checkboxes({ info }){
    return(
        <div>
            <input type='checkbox' id={ info }/>
            <label className='checkboxes-label' htmlFor={ info }>{ info }</label>
        </div>
    )
}

export { Checkboxes }