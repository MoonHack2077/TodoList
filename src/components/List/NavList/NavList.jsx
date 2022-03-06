import React from 'react'
import './NavList.css'

function NavList(){
    return(
        <div className='NavList'> 
            <div><span className='indicator'>Title</span></div>
            <div><span className='indicator'>Description</span></div>
            <div><span className='indicator'>Completed</span></div>
        </div>
    )
}

export { NavList }