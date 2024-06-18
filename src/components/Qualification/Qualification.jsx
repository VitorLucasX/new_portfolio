import { MdOutlineSchool } from 'react-icons/md'
import './qualification.css'
import { BiBriefcaseAlt } from 'react-icons/bi'
import { FaRegCalendarAlt } from 'react-icons/fa'

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualificações</h2>
        <span className="section__subtitle">Minha Jornada Pessoal</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <MdOutlineSchool className='qualification__icon'/>
                    Educação
                </div>

                <div className="qualification__button button--flex">
                    <BiBriefcaseAlt className='qualification__icon'/>
                    Experiência
                </div> 
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Desenvolvedor Front-end</h3>
                            <span className="qualification__subtitle">Free Lancer</span>
                            <div className="qualification__calender">
                                <FaRegCalendarAlt />
                                2024 - Atualmente
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Análise e Desenvolvimento de Sistemas</h3>
                            <span className="qualification__subtitle">Faculdade Pitágoras</span>
                            <div className="qualification__calender">
                                <FaRegCalendarAlt />
                                2023 - Formação
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Desenvolvedor Full Stack Trainee</h3>
                            <span className="qualification__subtitle">GrupoSFA</span>
                            <div className="qualification__calender">
                                <FaRegCalendarAlt />
                                2024 - Present
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
