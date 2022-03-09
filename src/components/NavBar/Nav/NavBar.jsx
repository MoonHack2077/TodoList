import React from 'react';
import {Checkboxes} from '../Checkboxes/Checkboxes'
import { TodoSearch } from '../TodoSearch/TodoSearch.jsx'
import './NavBar.css'

function NavBar(){
    return(
        <nav className='navBar'>
            <span className='navBar-icon'>TodoList.jsx</span>
            <section className='filters-container'>
                <span className='filters'>Filters</span>
                <Checkboxes info='All'/>
                <Checkboxes info='Done'/>
                <Checkboxes info='Uncompleted'/>
                <TodoSearch placeholder='Search a Todo'/>
            </section>
        </nav>
    )
}

export { NavBar }