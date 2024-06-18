import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/vitor-araujodev/" 
        className="home__social-icon" target="_blank">
            <FaLinkedin />
        </a>
        <a href="https://github.com/VitorLucasX" 
        className="home__social-icon" target="_blank">
            <FaGithub />
        </a>
        <a href="https://www.instagram.com/vitor.lucasz/" 
        className="home__social-icon" target="_blank">
            <FaInstagram />
        </a>
    </div>
  )
}

export default Social
