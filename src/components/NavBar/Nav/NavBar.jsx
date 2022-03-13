import React from 'react';
import {Checkboxes} from '../Checkboxes/Checkboxes'
import { TodoSearch } from '../TodoSearch/TodoSearch.jsx'
import './NavBar.css'

function NavBar({ onChange, value }){
    return(
        <nav className='navBar'>
            <span className='navBar-icon'>TodoList.jsx</span>
            <section className='filters-container'>
                <span className='filters'>Filters</span>
                <Checkboxes info='All'/>
                <Checkboxes info='Done'/>
                <Checkboxes info='Uncompleted'/>
                <TodoSearch value={value} onChange= {onChange} placeholder='Search a Todo'/>
            </section>
        </nav>
    )
}

export { NavBar }