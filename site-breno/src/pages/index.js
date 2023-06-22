// pages/index.js

import Head from 'next/head';
import Cabecalho from '../components/Cabecalho/index';
import Footer from '../components/Footer';
import CardList from '../components/CardList/index';



export default function Home() {
  return (
    <>
      <Head>
        <title>Breno Enoki | Advogado Especialista</title>
        <meta name="description" content="Advogado especialista em direito previdenciário, tributário e penal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cabecalho titulo="Advogado Especialista" descricao="Direito Previdenciário, Penal e Tributário" />
      <div className='w3-center w3-margin-top'>
        <CardList />
      </div>
      <Footer />

    </>

  );
}
