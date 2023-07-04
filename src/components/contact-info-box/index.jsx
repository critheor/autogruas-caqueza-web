import './style.css';

import { Link } from 'react-router-dom';

export function ContactInfoBox(){
    return(
        <article className='contact-info-box'>
            <div className='title'>
                <h3>CONTACT INFO</h3>
            </div>
            <div className='corporate-office-address'>
                <div className='title-color'>
                    <h4>Corporate Office Address:</h4>
                </div>
                <div>
                    <h4>Chipaque Cundinamarca - Cra 3 N° 3-42</h4>
                </div>
            </div>
            <div className='customer-service'>
                <div className='title-color'>
                    <h4>Customer Service:</h4>
                </div>
                <div>
                    <Link to='tel:3219691650' style={{color: 'white', textDecoration: 'none'}}>
                        <h4>(+57) 3219691650</h4>
                    </Link>
                </div>
            </div>
            <div className='email-service'>
                <div className='title-color'>
                    <h4>Email Address:</h4>
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