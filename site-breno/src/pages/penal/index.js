import Cabecalho from "../../components/Cabecalho";

export default function Penal(){

    const handleContact = () => {
        const message = encodeURIComponent(
        'Olá , estou interessado em obter mais informações.'
    );

    const phoneNumber = '68 992115839';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`,'_blank')
        }
    return (
        <div className="w3-center">
            <Cabecalho />
            <h1>
                Direito Penal
            </h1>
            <button className="w3-button"
                
                onClick={handleContact}>
                Contato via WhatsApp
            </button>
        </div>
    )
}