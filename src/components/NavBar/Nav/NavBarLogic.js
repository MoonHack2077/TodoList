import { useState } from 'react';

function NavBarLogic(){
    const [ hideFilters , setHideFilters ] = useState(false);

    const SetHideFilters = () =>{
        setHideFilters(!hideFilters);
    }

    return { hideFilters , SetHideFilters }
}

export { NavBarLogic }