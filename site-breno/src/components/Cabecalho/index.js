import logo from '../../../public/imagens/logo.png'
import estilo from '../../styles/Home.module.css'
import Image from 'next/image'

export  default function Cabecalho(){
    return (
        <header className='w3-black w3-padding w3-card-4'>
        <Image
          src={logo}
          width={120}
          height={120}
          alt='logo'
        />
        <h1 className={estilo.title}>Advogado Especialista</h1>
        <p className={estilo.description}>Direito Previdenciário, Tributário e Penal</p>
      </header>
    )

}