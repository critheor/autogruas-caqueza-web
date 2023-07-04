import { Link } from 'react-router-dom';
import './style.css';

export function ContactForm({ tipoServicio }){
    return(
        <div className='contact-form'>
            <div className='contact-form-container'>
                <form action='#' method='post'>
                    <h1>CONTACTO</h1>
                    <fieldset>
                        <label htmlFor="name">Nombre: <i>*</i></label>
                        <input type='text' id='name' name='name_client'/>

                        <label  htmlFor="phone">Telefono:  <i>*</i></label>
                        <input type='tel' id='phone' name='phone_client' required/>

                        <label  htmlFor='email'>Email: </label>
                        <input type='email' id='email' name='email_client'/>

                        <label htmlFor="company">Empresa:</label>
                        <input type="text" id='company' name='company'/>

                        <label  htmlFor='subject'>Asunto: <i>*</i></label>
                        <input type='text' id='subject' name='subject'/>

                        <label  htmlFor='question'>Pregunta: <i>*</i></label>
                        <textarea type="text" id='question' name='question' required/>
                    </fieldset>
                    <div className='send-message'>
                        <Link 
                            to={`mailto:autogruas-caqueza@hotmail.com?subject=${'solicitud ' + tipoServicio}`} 
                            style={{color: 'white', textDecoration: 'none'}}
                            role='button'
                            >
                            <h4>Enviar</h4>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}