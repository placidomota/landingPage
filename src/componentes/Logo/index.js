import React from 'react';
import logo from '../../../public/logo.png'
import styled from 'styled-components';


const LogoContainer = styled.div`
    display: flex;

.logo-img {
    margin: 2vh;
    height: 20vh;
    padding-left: 2vh;

}

@media (max-width: 800px) {
    .logo-img {
        margin: 1vh;
        height: 15vh;
        padding-left: 1vh;
    
    }
}


`

function Logo(){
    return(
        <LogoContainer>
            <img
                src={logo}
                alt='logo'
                className='logo-img'
            >
            </img>
        </LogoContainer>
    )
}

export default Logo;