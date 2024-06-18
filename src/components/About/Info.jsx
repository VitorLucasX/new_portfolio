import { FiAward } from "react-icons/fi"
import { IoSchoolOutline } from "react-icons/io5"
import { LuBriefcase } from "react-icons/lu"

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <FiAward  className="about__icon"/>
            <h3 className="about__title">Experiência</h3>
            <span className="about__subtitle">1 Ano Trabalhando</span>
        </div>

        <div className="about__box">
            <LuBriefcase className="about__icon"/>
            <h3 className="about__title">Completo</h3>
            <span className="about__subtitle">+ 32 Projetos</span>
        </div>

        <div className="about__box">
            <IoSchoolOutline className="about__icon" />
            <h3 className="about__title">Formado</h3>
            <span className="about__subtitle">ADS</span>
        </div>
    </div>
  )
}

export default Info
