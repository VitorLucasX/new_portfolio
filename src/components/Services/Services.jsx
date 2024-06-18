import './services.css'
import { HiArrowRight } from 'react-icons/hi'
import { CiCircleCheck } from 'react-icons/ci'
import { IoIosClose } from 'react-icons/io'
import { useState } from 'react'
import { SiWebauthn } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { MdOutlineDesignServices } from 'react-icons/md'

const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="services section" id="services">
         <h2 className="section__title">Serviços</h2>
         <span className="section__subtitle">Meus serviços</span>

         <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <SiWebauthn className='services__icon'/>
                    <h3 className="services__title">Desenvolvimento <br /> Web</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    Veja Mais
                    <HiArrowRight className='services__button-icon'/>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <IoIosClose onClick={() => toggleTab(0)}  className='services__modal-close'/>

                        <h3 className="services__modal-title">Desenvolvimento <br /> Web</h3>
                        <p className="services__modal-description">
                        Serviço com mais de 1.5 anos de experiência proporcionando trabalho
                        de qualidade a clientes e empresas.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <CiCircleCheck className='services__modal-icon'/>
                                <p className="services__modal-info">
                                Eu planejo a interface da página em um mapa mental.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Desenvolvo o protótipo no Figma com UX/UI.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Verifico a avaliação do cliente com base nos designs propostos.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Construo o código com ou sem framework de acordo com a complexidade.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Faço os testes, se estiver de acordo, envio pra produção.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <TbApi  className='services__icon' />
                    <h3 className="services__title">Desenvolvimento <br/> API</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    Veja Mais
                    <HiArrowRight className='services__button-icon'/>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <IoIosClose onClick={() => toggleTab(0)} className='services__modal-close'/>

                        <h3 className="services__modal-title">Desenvolvimento <br/> API</h3>
                        <p className="services__modal-description">
                        Serviço básico com 6 meses de experiência proporcionando trabalho
                        de qualidade a clientes e empresas.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Crio um mapa mental com os elementos que precisam na API.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Desenvolvo o código com todos os elementos necessários.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Conecto o banco de dados com a API.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Faço a integração com o front-end.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Faço todos os testes e manutenções que precisam, se estiver 
                                êxito com a integração e com o banco, subo para produção.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <MdOutlineDesignServices className='services__icon'/>
                    <h3 className="services__title">UX/UI <br /> Designer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>
                    Veja Mais
                    <HiArrowRight className='services__button-icon'/>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <IoIosClose onClick={() => toggleTab(0)}  className='services__modal-close'/>

                        <h3 className="services__modal-title">UX/UI <br /> Designer</h3>
                        <p className="services__modal-description">
                        Serviço básico com 6 meses de experiência proporcionando trabalho
                        de qualidade a clientes e empresas.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Eu faço o desenvolvimento do protótipo do 
                                projeto no figma com base os detalhes do usuário.
                                </p>
                            </li>
                            
                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Passo as informações pro cliente, recebo
                                a avaliação e faço mudanças se for necessário.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <CiCircleCheck />
                                <p className="services__modal-info">
                                Finalizo o Design e começo a produzir o código.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
    </section>
  )
}

export default Services
