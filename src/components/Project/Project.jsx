import { TiArrowRight } from 'react-icons/ti';
import './project.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img10 from '../../assets/img10.png';
import img8 from '../../assets/img8.png';
import img9 from '../../assets/img9.png';
import img11 from '../../assets/img11.png';
import img12 from '../../assets/img12.png';
import img13 from '../../assets/img13.jpg';
import img14 from '../../assets/img14.png';
import img15 from '../../assets/img15.png';
import { useState } from 'react';
const cards = [
  {
    id: 15,
    img: img15,
    title: 'Youtube Clone',
    category: 'frontend',
    links: [
      { text: 'Demo', url: 'https://youtube-clone-mu-inky.vercel.app/' },
      { text: 'Code', url: 'https://github.com/VitorLucasX/youtube_clone' }
    ]
  },
  {
    id: 11,
    img: img11,
    title: 'Restaurante',
    category: 'fullstack',
    links: [
      { text: 'Demo', url: 'https://restaurant-frontend-uq0w.onrender.com/' },
      { text: 'Code', url: 'https://github.com/VitorLucasX/restaurant_fullstack' }
    ]
  },
  {
    id: 14,
    img: img14,
    title: 'Dashboard',
    category: 'frontend',
    links: [
      { text: 'Demo', url: 'https://dashboard-react-indol.vercel.app/' },
      { text: 'Code', url: 'https://github.com/VitorLucasX/dashboard_react' }
    ]
  },
  {
    id: 10,
    img: img9,
    title: 'GYM Website',
    category: 'frontend',
    links: [
      { text: 'Demo', url: 'https://gym-website-react-green.vercel.app/' },
      { text: 'Code', url: 'https://github.com/VitorLucasX/gym_website_react' }
    ]
  },
  {
    id: 1,
    img: img3,
    title: 'eCommerce',
    category: 'frontend',
    links: [
      { text: 'Demo', url: 'https://e-commerce-react-redux-5o8r.vercel.app/' },
      { text: 'Code', url: 'https://github.com/VitorLucasX/ecommerce-react-redux' }
    ]
  },
  {
    id: 2,
    img: img2,
    title: 'SkyAsia',
    category: 'frontend',
    links: [
      { text: 'Demo', url: 'https://skyasia-food-react-ts-tailwind.vercel.app/' },
      { text: 'Code', url: 'https://github.com/VitorLucasX/skyasia_food_react_ts_tailwind' }
    ]
  },
  {
    id: 3,
    img: img1,
    title: 'Trips',
    category: 'frontend',
    links: [
      { text: 'Demo', url: 'https://trevor-packages-react.vercel.app/' },
      { text: 'Code', url: 'https://github.com/VitorLucasX/trevor_packages_react' }
    ]
  },
  {
    id: 4,
    img: img4,
    title: 'Finance Control',
    category: 'frontend',
    links: [
      { text: 'Demo', url: 'https://finance-control-react-sass.vercel.app/' },
      { text: 'Code', url: 'https://github.com/VitorLucasX/finance_control_react_sass' }
    ]
  },
  {
    id: 5,
    img: img6,
    title: 'Pomodoro',
    category: 'frontend',
    links: [
      { text: 'Demo', url: 'https://pomodoro-react-typescript-sass.vercel.app/' },
      { text: 'Code', url: 'https://github.com/VitorLucasX/pomodoro_react_typescript_sass' }
    ]
  },
  {
    id: 13,
    img: img12,
    title: 'Picpay transaction',
    category: 'backend',
    links: [
      { text: 'Code', url: 'hhttps://github.com/VitorLucasX/picpay-backend' }
    ]
  },
  {
    id: 7,
    img: img8,
    title: 'API Controle de Veículos',
    category: 'backend',
    links: [
      { text: 'Code', url: 'https://github.com/VitorLucasX/api-controle-veiculos' }
    ]
  },
  {
    id: 12,
    img: img13,
    title: 'API Controle de Funcionários',
    category: 'backend',
    links: [
      { text: 'Code', url: 'https://github.com/VitorLucasX/api_iniflex' }
    ]
  },
  {
    id: 6,
    img: img5,
    title: 'API Registro de Endereços',
    category: 'backend',
    links: [
      { text: 'Demo', url: 'https://ecommerce-nike-react.vercel.app/' },
      { text: 'Code', url: 'https://github.com/VitorLucasX/address-registration' }
    ]
  },
  {
    id: 8,
    img: img10,
    title: 'Star Colchões',
    category: 'uxui',
    links: [
      { text: 'Demo', url: 'https://www.figma.com/community/file/1386389920631017451' }
    ]
  },
  {
    id: 9,
    img: img7,
    title: 'LM Transportes',
    category: 'uxui',
    links: [
      { text: 'Code', url: 'https://github.com/VitorLucasX/api-controle-veiculos' }
    ]
  }
];

const Project = () => {
  const [filter, setFilter] = useState('Todos');

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <section className="project section" id='project'>
        <h2 className="section__title">Projetos</h2>
        <span className="section__subtitle">Meus Projetos Pessoais</span>

        <div className="project__filtros">
            <div className={`filtro__item ${filter === 'Todos' ? 'active' : ''}`} onClick={() => handleFilter('Todos')}>
                Todos
            </div>
            <div className={`filtro__item ${filter === 'frontend' ? 'active' : ''}`} onClick={() => handleFilter('frontend')}>
                Frontend
            </div>
            <div className={`filtro__item ${filter === 'fullstack' ? 'active' : ''}`} onClick={() => handleFilter('fullstack')}>
                Fullstack
            </div>
            <div className={`filtro__item ${filter === 'backend' ? 'active' : ''}`} onClick={() => handleFilter('backend')}>
                Backend
            </div>
            <div className={`filtro__item ${filter === 'uxui' ? 'active' : ''}`} onClick={() => handleFilter('uxui')}>
                UX/UI
            </div>
        </div>

        <div className="container">
    <div className="project__container grid">
        {cards.filter(card => filter === 'Todos' || card.category === filter).map(card => (
            <div className="project__card" key={card.id}>
                <img src={card.img} alt="" className='project__card-img' />
                <h3 className="project__card-title">{card.title}</h3>
                <div className="project__links">
                  {card.links.map(link => (
                        <a key={link.text} className='project__card-link' href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.text} <TiArrowRight className='project__card-icon' />
                        </a>
                    ))}
                </div>
            </div>
        ))}
    </div>
</div>
    </section>
  );
};

export default Project;

