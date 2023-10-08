import React from 'react';
import AirBNB from '../AirBNB.png'

export default function NavBar() {
    return(
        <nav className='nav'>
            <img src={AirBNB} width="60px" className='airbnb'></img>
        </nav>
    )

    
}