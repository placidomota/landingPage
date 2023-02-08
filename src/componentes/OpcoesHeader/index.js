import React from "react";
import './estilo.css';


const textoOpcoes = ['Home','Serviços', 'Contato']
function OpcoesHeader(){
    return(
        <ul className="opcoes">
            { textoOpcoes.map( (texto) => (
                <li className="opcao"><p>{texto}</p></li>
            ))}
        </ul>
    )
}
export default OpcoesHeader;