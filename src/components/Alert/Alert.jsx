import React from 'react';
import './Alert.css';

function Alert({ message , hide }){
    return(
        <div className={`Alert ${ hide && 'none' }`} >
            <h2>{ message }</h2>
        </div>
    )
}

export { Alert }