import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
    display: flex;
    width: 100vw;
   
`
const CardHeader=styled.div`
    font-size: 1.5rem;
    color: rgb(185, 185, 22);
`

const CardBody=styled.div`
display: flex;
flex-direction: column;
`

function Card(props){
    return (
        <CardContainer>
            <CardHeader>
                <p>{props.titulo}</p>
            </CardHeader>
           <CardBody>
                <img src={props.image}></img>
                <p>{props.texto}</p>
           </CardBody>
        </CardContainer>
            
    )
}

export default Card;