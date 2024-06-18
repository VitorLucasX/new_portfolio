import { CiLinkedin, CiMail } from 'react-icons/ci';
import './contact.css';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kgw5qjs', 'template_0ulnjm7', form.current, {
        publicKey: 'IjeZoqnCM-fDZN9lW',
      })
      e.target.reset()
  };
  return (
    <section className="contact section" id="contact">
         <h2 className="section__title">Entrar em Contato</h2>
         <span className="section__subtitle">Contate-me</span>

         <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Fale Comigo</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <CiMail />


                        <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">vitorlucasdev@gmail.com</span>

                            <a target='blank' href="mailto:vitorlucasdev@gmail.com" className="contact__button">Mensagem
                                <FaArrowRight className='contact__button-icon' />
                            </a>
                    </div>

                    <div className="contact__card">
                        <FaWhatsapp />

                        <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">(31) 99672-9996</span>

                            <a target='blank' href="https://api.whatsapp.com/send?phone=3199672996&text=Ol%C3%A1,%20boa%20tarde!" className="contact__button">Mensagem
                                <FaArrowRight className='contact__button-icon' />
                            </a>
                    </div>

                    <div className="contact__card">
                        <CiLinkedin />

                        <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">vitor-araujodev</span>

                            <a target='blank' href="https://www.linkedin.com/in/vitor-araujodev/" className="contact__button">Mensagem
                                <FaArrowRight className='contact__button-icon' />
                            </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Escreva-me seu Projeto</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Nome</label>
                        <input type="text"  name='name' className='contact__form-input'
                        placeholder='Insira o seu nome'/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email"  name='email' className='contact__form-input'
                        placeholder='Insira o seu email'/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Projeto</label>
                        <textarea name="project" cols="30" rows="10" className='contact__form-input'
                        placeholder='Digite a descrição e ideia do seu projeto'>
                        </textarea>
                    </div>

                    <button className="button button--flex">
                         Mensagem
                        <SiMinutemailer style={{ paddingLeft: '5px', fontSize: '25px'}} />
                    </button>
                </form>
            </div>
         </div>
    </section>
  )
}

export default Contact
