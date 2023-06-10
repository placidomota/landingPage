// pages/index.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import previdenciario from '../../public/imagens/direito-previdenciario.jpg'
import penal from '../../public/imagens/penal.png'
import tributario from '../../public/imagens/direito-tributario.jpg'
import Cabecalho from '../components/Cabecalho/index';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Breno Enoki | Advogado Especialista</title>
        <meta name="description" content="Advogado especialista em direito previdenciário, tributário e penal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w3-container-fluid w3-center w3-white">
        <Cabecalho />

        <div id="texto-cards" className="w3-row-padding w3-small w3-padding">
          <Link href="/previdenciario" className="w3-col s4 w3-hover-shadow">
            <header class="w3-container-fluid">
              <h3 className={styles.title}>Direito Previdenciário</h3>
              <Image src={previdenciario} alt="Direito Previdenciário" className={styles.image} />
              <p>Texto breve descrevendo os serviços e a expertise em direito previdenciário.</p>
              <button className="w3-button w3-black">
                Saiba mais...
              </button>
            </header>

          </Link>
          <Link href="/penal" className="w3-col s4  w3-hover-shadow">
            <header class="w3-container-fluid">
              <h3 className={styles.title}>Direito Penal</h3>
              <Image src={penal} alt="Direito Penal" className={styles.image} />
              <p>Texto breve descrevendo os serviços e a expertise em direito previdenciário.</p>
              <button className="w3-button w3-black">
                Saiba mais...
              </button>
            </header>

          </Link>
          <Link href="/tributario" className="w3-col s4  w3-hover-shadow">
            <header class="w3-container-fluid">
              <h3 className={styles.title}>Direito Tributário</h3>
              <Image src={tributario} alt="Direito Tributário" className={styles.image} />
              <p>Texto breve descrevendo os serviços e a expertise em direito previdenciário.</p>
              <button className="w3-button w3-black">
                Saiba mais...
              </button>
            </header>


          </Link>
        </div>
      </main>

      <footer className="w3-conteiner w3-center w3-black w3-padding">
        <p>Entre em contato para mais informações:</p>
        <a href="tel:+11234567890">Telefone: (11) 2345-6789</a><br></br>
        <a href="mailto:contato@advogadoespecialista.com">E-mail: contato@advogadoespecialista.com</a>
      </footer>
    </div>
  );
}
