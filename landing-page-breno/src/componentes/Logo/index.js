import React from 'react';
import logo from '../../../public/logo.png'
import './estilo.css'

function Logo(){
    return(
        <div className='logo'>
            <img
                src={logo}
                alt='logo'
                className='logo-img'
            >
            </img>
        </div>
    )
}

export default Logo;