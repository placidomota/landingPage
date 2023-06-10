import React from "react";
import Card from "../Card"
import imagem1 from '../../../public/previdencia.png'
import imagem2 from '../../../public/penal.png'
import imagem3 from '../../../public/tributario.png'
import imagem4 from '../../../public/civil.png'
import styled from "styled-components";


const ConteudoContainer = styled.div`
    display: flex;
   flex-direction: column;

    /* @media (max-width: 800px) {
      flex-direction: column;
    } */



`



function Conteudo(){
    return (
           <ConteudoContainer>
                <Card  titulo="Direito Previdenciário" image={imagem1}/>
                <Card  titulo="Direito Penal" image={imagem2}/>
                <Card  titulo="Direito Tributário" image={imagem3} />
                <Card  titulo="Direito Civil" image={imagem4} />            
            </ConteudoContainer>
    )
}
export default Conteudo;