import React from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { SetValues } from '../SetValues/SetValues.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { NavBarLogic } from './NavBarLogic.js'
import './NavBar.css';


function NavBar({ onClick , onChange , value }){
    const { hideFilters , SetHideFilters } = NavBarLogic();

    return(
        <nav className='navBar' >
            <span className='navBar-icon'>TodoList.jsx</span>
            <section className='filters-container'  >
                <div className='filters' id={ hideFilters ? 'hidden' : '' } >
                    <span className='filters-span'>Filters</span>
                    <Checkbox onClick={ onClick } info='All'/>
                    <Checkbox onClick={ onClick } info='Done'/>
                    <Checkbox onClick={ onClick } info='Uncompleted'/>
                    <SetValues 
                        className='inputs_config SetValues-Nav' 
                        value={ value }
                        onChange={ onChange } 
                        placeholder='Search Todo'
                    />
                </div>
            </section>
            <div className='menu-container' onClick={ SetHideFilters } >
                <FontAwesomeIcon className='burger' icon={ faBars } />
            </div>
        </nav>
    )
}

export { NavBar }