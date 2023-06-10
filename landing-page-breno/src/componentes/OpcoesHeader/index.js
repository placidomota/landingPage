import React from "react";
import styled from "styled-components";
import whatsapp from '../../../public/whatsapp.svg'
import instagram from '../../../public/instagram.svg'
import facebook from '../../../public/facebook.svg'

const OpcoesContainer = styled.ul`
        

`
const Icone = styled.li`
    margin-right: 40px;


`


const icones = [whatsapp, instagram, facebook]


function OpcoesHeader(){
    return(
        <OpcoesContainer>
             { icones.map( (icone) => (
                <Icone><img src={icone} alt="icones"></img></Icone>
            ))}           
        </OpcoesContainer>
    )
}
export default OpcoesHeader;