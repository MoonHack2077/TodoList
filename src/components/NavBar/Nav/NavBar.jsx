import React from 'react';
import {Checkboxes} from '../Checkboxes/Checkboxes'
import './NavBar.css'

function NavBar({onClick, onChange, value }){
    return(
        <nav className='navBar'>
            <span className='navBar-icon'>TodoList.jsx</span>
            <section className='filters-container'>
                <span className='filters'>Filters</span>
                <Checkboxes onClick={onClick} info='All'/>
                <Checkboxes onClick={onClick} info='Done'/>
                <Checkboxes onClick={onClick} info='Uncompleted'/>
                <input className='TodoSearch' type='text' value={ value } onChange={ onChange } placeholder='Search Todo'/>
            </section>
        </nav>
    )
}

export { NavBar }