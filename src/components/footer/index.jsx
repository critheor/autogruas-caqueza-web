import './style.css';
import { ContactInfoBox } from '../contact-info-box';
import { DiscoverBox } from '../discover-box';

export function Footer(){
    return(
        <footer className='app-footer'>
            <div className='app-footer-container'>
                <div className='item-footer'>
                    <ContactInfoBox />
                </div>
                <div className='item-footer'>
                    <h3>SERVICIO 24 HORAS</h3>
                    <h4>Via Bogota - Villavicencio</h4>
                </div>
                <div className='item-footer'>
                    <DiscoverBox size={38} color={'white'}/>
                </div>
            </div>
        </footer>
    )
}