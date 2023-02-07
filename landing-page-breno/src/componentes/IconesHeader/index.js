import instagram from '../../../public/instagran.png';
import facebook from '../../../public/facebook.png';
import wathsap from '../../../public/whathsap.png';
import './estilo.css';


const icones = [instagram, facebook, wathsap]

function IconesHeader(){
    return(
    <ul className='icones'>
        <li>
            <img src={facebook}></img>
        </li>
    </ul>
    )
}
export default IconesHeader;