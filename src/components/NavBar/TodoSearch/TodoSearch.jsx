import React from 'react'
import './TodoSearch.css';

function TodoSearch({placeholder, info}){
    const [searchValue, setSearchValue] = React.useState('');
    return (
        <input className='TodoSearch' 
        placeholder={placeholder} 
        value={searchValue} 
        id={info}
        onChange={e=> setSearchValue(e.target.value)}/>
    )
}

export { TodoSearch } 