import React from 'react'
import './TodoSearch.css';

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState('');
    return (
        <input className='TodoSearch' 
        placeholder='Search a todo' 
        value={searchValue} 
        onChange={e=> setSearchValue(e.target.value)}/>
    )
}

export { TodoSearch } 