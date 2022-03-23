import React from 'react'
import './BtnSet.css';

function BtnSet({ onClick , value , className}){
    return (
      <div className='BtnSet' onClick={ onClick } >
        <input type='button' value={ value } className={ className } />
      </div>
    )
}

export { BtnSet }