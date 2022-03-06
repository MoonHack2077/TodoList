import React from 'react'
import './Detail.css'

function Detail({ info, placeholder }){
    const [ item,setItem ] = React.useState('');

    return(
        <div className='Detail'>
            <label className='Detail-label' htmlFor={info}>{info}</label>
            <input className='input-detail' placeholder={placeholder} id={info} value={item} onChange={e =>setItem(e.target.value)}/>
        </div>
    )
}


export { Detail }