import React from 'react'
import './TodoSearch.css';

function TodoSearch({ placeholder, info, onChange, value }){
    return (
        <input className='TodoSearch' 
        placeholder={ placeholder } 
        value={ value } 
        id={ info }
        onChange={ onChange }/>
    )
}

export { TodoSearch } 