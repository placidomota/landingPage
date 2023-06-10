import styled from 'styled-components';
import instagram from '../../../public/instagram.svg'
import wathsap from '../../../public/whatsapp.svg'


const Icone = styled.li`
    margin-right: 40px;
    width: 25px;

`


const Icones = styled.ul`
    display: flex;
    align-items: center;

`

const icones = [instagram, wathsap]

function IconesHeader(){
    return(
    <Icones>
        {icones.map( (icone) => (
            <Icone>
                <img src={icone} alt='icone'></img>
            </Icone>
        ))}
    </Icones>
    )   
}
export default IconesHeader;