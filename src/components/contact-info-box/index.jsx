import './style.css';

import { Link } from 'react-router-dom';

export function ContactInfoBox(){
    return(
        <article className='contact-info-box'>
            <div className='title'>
                <h3>CONTACTO</h3>
            </div>
            <div className='corporate-office-address'>
                <div className='title-color'>
                    <h4>Ubicacion, Sede oficina:</h4>
                </div>
                <div>
                    <h4>Carrera 3# 3.42 Chipaque - Cund</h4>
                </div>
            </div>
            <div className='corporate-office-address'>
                <div className='title-color'>
                    <h4>Ubicacion, Base de gruas:</h4>
                </div>
                <div>
                    <h4>Parqueadero los naranjos Caqueza - Cund</h4>
                </div>
            </div>
            <div className='customer-service'>
                <div className='title-color'>
                    <h4>Telefono:</h4>
                </div>
                <div>
                    <Link to='tel:3219691650' style={{color: 'white', textDecoration: 'none'}}>
                        <h4>(+57) 3219691650</h4>
                    </Link>
                </div>
            </div>
            <div className='email-service'>
                <div className='title-color'>
                    <h4>Correo:</h4>
                </div>
                <div>
                    <Link to='mailto:autogruas-caqueza@hotmail.com?subject=Solicitud de servicio' style={{color: 'white', textDecoration: 'none'}}>
                        <h4>autogruas-caqueza@hotmail.com</h4>
                    </Link>
                </div>
            </div>
        </article>
    )
}