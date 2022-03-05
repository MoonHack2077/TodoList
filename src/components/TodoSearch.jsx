import React from 'react'
import '../index.css';

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState('');
    return (
        <input className='TodoSearch' 
        placeholder='Search a new todo...' 
        value={searchValue} 
        onChange={(e)=>setSearchValue(e.target.value)}/>
    )
}

export { TodoSearch } 