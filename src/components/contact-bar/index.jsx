import './style.css';
import { Phone } from '../phone';
import { Map } from '../map';
import { Mail } from '../mail';

export function ContactBar({size}){
    return(
        <div className='contact-bar'>
            <div className='container'>
                <div className='row'>
                    <div className='item-contact-bar'>
                        <Phone size={size}/>
                    </div>
                    <div className='item-contact-bar'>
                        <Map size={size}/>
                    </div>
                    <div className='item-contact-bar'>
                        <Mail size={size}/>
                    </div>
                </div>
            </div>
        </div>
    )
}