import React from 'react';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';



const HeaderContainer =  styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
      flex-direction: column;
    }


`

function Header() {
    return (
       <HeaderContainer>
            <Logo />
            <OpcoesHeader />
       </HeaderContainer>
         
            
    )
}

export default Header;
