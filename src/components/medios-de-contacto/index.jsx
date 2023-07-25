
import {  Phone } from '../phone';
import { Mail } from '../mail';
import { Instagram } from '../instagram';
import { Facebook } from '../facebook';
import { Map } from '../map';
import './style.css';

export function MediosDeContacto({size, color}){
    return(
        <div className='medios-contacto'>
            <div className='mc-container'>
                <div className='mc-ctn-row'>
                    <div className='item tel'>
                        <div className='f-0'>
                            <Phone size={size} color={color}/>
                        </div>
                        <div className='f-1'>
                            <h3>LLamanos</h3>
                        </div>
                    </div>
                    <div className='item email'>
                        <div className='f-0'>
                            <Mail size={size} color={color}/>
                        </div>
                        <div className='f-1'>
                            <h3>Escribenos</h3>
                        </div>
                    </div>
                    <div className='item insta'>
                        <div className='f-0'>
                            <Instagram size={size} color={color}/>
                        </div>
                        <div className='f-1'>
                            <h3>Visitanos</h3>
                        </div>
                    </div>
                    <div className='item face'>
                        <div className='f-0'>
                            <Facebook size={size} color={color}/>
                        </div>
                        <div className='f-1'>
                            <h3>Comentanos</h3>
                        </div>
                    </div>
                    <div className='item face'>
                        <div className='f-0'>
                            <Map size={size} color={color}/>
                        </div>
                        <div className='f-1'>
                            <h3>Ubicanos</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}