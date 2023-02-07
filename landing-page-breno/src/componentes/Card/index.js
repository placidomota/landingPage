import React from 'react';
import './estilo.css';
import imagem1 from '../../../public/direito.jpg'

function Card(){
    return (
        <div className='card'>
            <div className='card-header'>
                <p>Direito previdenciario</p>
            </div>
            <div className='card-body'>
                <img src={imagem1}></img>
            </div>
        </div>
    )
}

export default Card;