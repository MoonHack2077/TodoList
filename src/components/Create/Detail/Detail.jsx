import React from 'react';
import { TodoSearch } from '../../NavBar/TodoSearch/TodoSearch.jsx';
import './Detail.css';

function Detail({ info, placeholder }){
    return(
        <div className='Detail'>
            <label className='Detail-label' htmlFor={info}>{info}</label>
            <TodoSearch className='TodoSearch' placeholder={placeholder} info={info}/>
        </div>
    )
}


export { Detail }