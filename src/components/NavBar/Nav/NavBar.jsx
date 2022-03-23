import React , { useState } from 'react';
import { Checkboxes } from '../Checkboxes/Checkboxes';
import { SetValues } from '../SetValues/SetValues.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';


function NavBar({ onClick , onChange , value }){
    const [ hideNav , setHideNav ] = useState(false);

    return(
        <nav className='navBar' >
            <span className='navBar-icon'>TodoList.jsx</span>
            <section className='filters-container'  >
                <div className='filters' id={ hideNav ? 'hidden' : '' } >
                    <span className='filters-span'>Filters</span>
                    <Checkboxes onClick={ onClick } info='All'/>
                    <Checkboxes onClick={ onClick } info='Done'/>
                    <Checkboxes onClick={ onClick } info='Uncompleted'/>
                    <SetValues 
                        className='SetValues SetValues-Nav' 
                        value={ value }
                        onChange={ onChange } 
                        placeholder='Search Todo'
                    />
                </div>
            </section>
            <div className='menu-container' onClick={ () => setHideNav( !hideNav ) } >
                <FontAwesomeIcon className='burger' icon={ faBars } />
            </div>
        </nav>
    )
}

export { NavBar }