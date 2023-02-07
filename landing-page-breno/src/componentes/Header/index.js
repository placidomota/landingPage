import React from 'react';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import './estilo.css'


function Header() {
    return (
        <header className='App-Header'>
            <Logo />
            <OpcoesHeader />
        </header>
    )
}

export default Header;
