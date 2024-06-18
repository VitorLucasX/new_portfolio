import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Vitor</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#project" className="footer__link">Projetos</a>
                </li>

                <li>
                    <a href="#home" className="footer__link">Início</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/vitor-araujodev/" 
            className="footer__social-link" target="_blank">
               <FaLinkedin />

            </a>
            <a href="https://github.com/VitorLucasX" 
            className="footer__social-link" target="_blank">
               <FaGithub />
            </a>

            <a href="https://www.instagram.com/vitor.lucasz/" 
            className="footer__social-link" target="_blank">
                <FaInstagram />
            </a>
            </div>

            <span className="footer__copy">
             &#169; vitorlucasdev. Todos os direitos reservados
            </span>
        </div>
    </footer>
  )
}

export default Footer
