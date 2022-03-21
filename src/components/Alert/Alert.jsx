import React from 'react';
import './Alert.css';

function Alert({ message , hide }){
    return(
        <div className={`Alert ${ hide && 'none' }`} >
            <p>{ message }</p>
        </div>
    )
}

export { Alert }