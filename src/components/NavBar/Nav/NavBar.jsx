import React , { useState } from 'react';
import { Checkboxes } from '../Checkboxes/Checkboxes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';


function NavBar({ onClick , onChange , value }){
    const [ hideNav , setHideNav ] = useState(true);

    return(
        <nav className='navBar' >
            <span className='navBar-icon'>TodoList.jsx</span>
            <section className='filters-container'  >
                <div className='filters' id={ hideNav ? 'hidden' : '' } >
                    <span className='filters-span'>Filters</span>
                    <Checkboxes onClick={ onClick } info='All'/>
                    <Checkboxes onClick={ onClick } info='Done'/>
                    <Checkboxes onClick={ onClick } info='Uncompleted'/>
                    <input 
                        className='TodoSearch' 
                        type='text' value={ value }
                        onChange={ onChange } 
                        placeholder='Search Todo'
                    />
                </div>
            </section>
            <div className='burger-container' onClick={ () => setHideNav(!hideNav) } >
                <FontAwesomeIcon className='burger' icon={ faBars } />
            </div>
        </nav>
    )
}

export { NavBar }