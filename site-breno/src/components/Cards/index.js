import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'



export default function Cards({ title, description, link, imagem }) {
  return (
    <>
      <Link href={link} className=" w3-third w3-margin-top">
        <Image src={imagem} alt={title} className={'w3-image'} height={400}/>
        <div className='w3-container w3-padding'>
          <h3 className={styles.title}>{title}</h3>
          <p>{description}</p>
          {/* <button className={styles.botao}>
            Saiba mais...
          </button> */}
        </div>
      </Link>
    </>


  )
}