import { Phone } from '../phone';
import './style.css';

export function Telefono({size, color}){
    return (
        <div className='telefono'>
            <div className='tel-container'>
                <div className='tel-row'>
                    <Phone size={size} color={color}/>
                </div>
            </div>
        </div>
    )
}