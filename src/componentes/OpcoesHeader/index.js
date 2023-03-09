import React from "react";
import styled from "styled-components";
import whatsapp from '../../../public/whatsapp.svg'
import instagram from '../../../public/instagram.svg'
import facebook from '../../../public/facebook.svg'

const OpcoesContainer = styled.ul`
        display: flex;

    .opcao {
        font-size: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        color: yellow;
        padding-right: 16px;
    }

`


const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    list-style: none;

`


const textoOpcoes = ['Home','Serviços', 'Contato']
const icones = [whatsapp, instagram, facebook]


function OpcoesHeader(){
    return(
        <OpcoesContainer>
             { icones.map( (icone) => (
                <Icone><img src={icone} alt="icones"></img></Icone>
            ))}
            {/* { textoOpcoes.map( (texto) => (
                <li className="opcao"><p>{texto}</p></li>
            ))}
            */}
        </OpcoesContainer>
    )
}
export default OpcoesHeader;