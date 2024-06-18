import { FaRegHandPaper } from "react-icons/fa"
import { SiMinutemailer } from "react-icons/si"

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Vitor Lucas <FaRegHandPaper className="home__hand"/></h1>
        <h3 className="home__subtitle">Front-end Developer</h3>
        <p className="home__description">Desenvolvedor apaixonado 
        por tecnologia, programação e UX UI.</p>
        <a href="#contact" className="button button--flex">
            Envie um e-mail
            <SiMinutemailer style={{ paddingLeft: '5px', fontSize: '25px'}} />
        </a>
    </div>
  )
}

export default Data
