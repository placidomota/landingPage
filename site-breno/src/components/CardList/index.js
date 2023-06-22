import previdenciario from '../../../public/imagens/direito-previdenciario.jpg'
import penal from '../../../public/imagens/penal.jpg';
import tributario from '../../../public/imagens/tributario1.jpeg'
import Cards from '../Cards/index';

export default function CardList() {
  const cards = [
    {
      title: 'Direito Penal',
      description: 'Explicacao clara e objetiva sobre direito penal',
      link: '/penal',
      imagem: penal,
    },
    {
      title: 'Direito Previdenciàrio',
      description: 'Explicacao clara e objetiva sobre direito penal',
      link: '/previdenciario',
      imagem: previdenciario,
    },
    {
      title: 'Direito Tributário',
      description: 'Explicacao clara e objetiva sobre direito penal',
      link: '/tributario',
      imagem: tributario,
    },
  ];
  return (
    <div className='w3-container w3-padding'>
      {cards.map((card, index) => (
          <Cards key={index}
            imagem={card.imagem}
            title={card.title}
            description={card.description}
            link={card.link} />
      ))}
    </div>
  )

}