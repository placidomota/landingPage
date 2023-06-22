import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import logo from '../../../public/imagens/logo.png';
import face from '../../../public/imagens/facebook.png';
import instagram from '../../../public/imagens/instagran.png';
import whatsapp from '../../../public/imagens/whatsapp.png';
import previdenciario from '../../../public/imagens/direito-previdenciario.jpg'
import penal from '../../../public/imagens/penal.jpg'
import tributario from '../../../public/imagens/direito-tributario.jpg'
import Link from 'next/link';


const LandingPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Landing Page do Advogado</title>
            </Head>

            <header className={`${styles.header} w3-container w3-padding-16`}>
                <div className={styles.logo}>
                    <Image src={logo} alt="Logo do Advogado" width={250} height={150} />
                </div>
                <div className={styles.socialIcons}>
                    <a href="#" className={`${styles.icon} w3-hover-opacity`}>
                        <Image src={face} alt="Ícone do Facebook" width={30} height={30} />
                    </a>
                    <a href="#" className={`${styles.icon} w3-hover-opacity`}>
                        <Image src={instagram} alt="Ícone do Instagram" width={30} height={30} />
                    </a>
                    <a href="#" className={`${styles.icon} w3-hover-opacity`}>
                        <Image src={whatsapp} alt="Ícone do WhatsApp" width={30} height={30} />
                    </a>
                </div>
            </header>

            <main>
                <section className={`${styles.heroSection} w3-container w3-center`}>
                    <div className={styles.heroText}>
                        <h1>Advocacia Especializada em Diversas Áreas</h1>
                        <p>Oferecemos serviços jurídicos de qualidade nas áreas de Direito Previdenciário, Direito Penal e Direito Tributário.</p>
                    </div>
                    <div className={`${styles.heroImages} w3-row-padding w3-padding-16`}>
                        <div className={`${styles.heroImage} w3-third`}>
                            <Link href="/previdenciario">
                                <Image src={previdenciario} alt="Imagem de Direito Previdenciário" width={400} height={300} className={styles.image} />
                                <h3 className={styles.title}>Direito Previdenciário</h3>
                            </Link>
                        </div>
                        <div className={`${styles.heroImage} w3-third`}>
                            <Link href="/penal">
                                <Image src={penal} alt="Imagem de Direito Penal" width={400} height={300} className={styles.image} />
                                <h3 className={styles.title}>Direito Penal</h3>
                            </Link>
                        </div>
                        <div className={`${styles.heroImage} w3-third`}>
                            <Link href="/tributario">
                                <Image src={tributario} alt="Imagem de Direito Tributário" width={400} height={300} className={styles.image} />
                                <h3 className={styles.title}>Direito Tributário</h3>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={`${styles.footer} w3-container w3-padding-16 w3-black w3-center`}>
                <div className={`${styles.footerSection} w3-third`}>
                    <h3><i className="fa fa-map-marker"></i> Endereço</h3>
                    <p>Rua Exemplo, 123</p>
                    <p>Cidade, Estado</p>
                    <p>CEP 12345-678</p>
                </div>
                <div className={`${styles.footerSection} w3-third`}>
                    <h3>Contato</h3>
                    <p>Telefone: (00) 1234-5678</p>
                    <p>Celular: (00) 9876-5432</p>
                </div>
                <div className={`${styles.footerSection} w3-third`}>
                    <h3>Email</h3>
                    <p>advogado@exemplo.com</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
