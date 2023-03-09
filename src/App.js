import React from "react";
import Header from './componentes/Header'
import styled from "styled-components";
import Conteudo from "./componentes/Conteudo";


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(12, 1, 1); /* For browsers that do not support gradients */
  background-image: linear-gradient(90deg, rgb(0, 0, 0), rgb(78, 78, 77));

`

function App(){
    return(
      <AppContainer>
        <Header />
        <Conteudo />
      </AppContainer>
       
    )
}

export default App;