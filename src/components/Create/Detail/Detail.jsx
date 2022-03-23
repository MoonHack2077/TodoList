import React from 'react';
import { SetValues } from '../../NavBar/SetValues/SetValues.jsx';
import './Detail.css';

function Detail({ info, placeholder,value, onChange }){
    return(
        <div className='Detail'>
            <label className='Detail-label' htmlFor={ info }>{ info }</label>
            <SetValues 
                className='SetValues' 
                value={ value } 
                onChange={ onChange } 
                placeholder={ placeholder } 
                info={ info }
            />
        </div>
    )
}


export { Detail }