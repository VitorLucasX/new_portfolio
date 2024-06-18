import './about.css';
import CV from "../../assets/curriculoVitor.pdf";
import AboutImg from "../../assets/programming.png";
import Info from './Info';
import { IoCloudDownloadOutline } from 'react-icons/io5';

const About = () => {
  return (
    <section className="about" id='about'>
        <h2 className="section__title">Sobre Mim</h2>
        <span className="section__subtitle">Meu Resumo</span>

        <div className="about__container container grid">
            <img src={AboutImg} className='about__img' alt="" />

            <div className="about__data">
                <Info />

                <p className="about__description">
                Sou um profissional extremamente focado em proatividade e eficiência. Busco constantemente
                expandir meus conhecimentos e habilidades em todas as linguagens e documentações da programação.
                Meu objetivo como Desenvolvedor, é, entregar uma ótima experiência ao usuário final conforme os 
                requisitos que ele busca em uma aplicação. Procuro sempre planejar o protótipo no Figma, desenvolver, 
                testar, e claramente fazer a entrega do produto com êxito.
                </p>

                <a download="" href={CV} className="button button--flex">
                    Download CV
                    <IoCloudDownloadOutline style={{ paddingLeft: '5px', fontSize: '20px'}} />
                </a>
            </div>
        </div>
    </section>
  )
}

export default About
