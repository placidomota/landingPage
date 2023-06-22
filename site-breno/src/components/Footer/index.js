import styles from '../../styles/Home.module.css'
export default function Footer() {
    return (
        <footer>
            <div className=" w3-center w3-black">
                <h3 className={styles.title}>Entre em contato para mais informações:</h3>
                <div className='w3-container'>
                <a className={styles.description} href="tel:+11234567890">Telefone: (11) 2345-6789</a><br></br>
                <a className={styles.description} href="mailto:contato@advogadoespecialista.com">E-mail: contato@advogadoespecialista.com</a>
                </div>
            </div>
        </footer>
    )
}