import React from 'react';
import './Alert.css';

function Alert({ message , hide , className }){
    return(
        <div className={`Alert ${ hide && 'none' } ${className}`} >
            <h2>{ message }</h2>
        </div>
    )
}

export { Alert }