import React from 'react';
import './estilo.css';

function Card(props){
    return (
        <div className='card'>
            <div className='card-header'>
                <p>{props.titulo}</p>
            </div>
            <div className='card-body'>
                <img src={props.image}></img>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}

export default Card;