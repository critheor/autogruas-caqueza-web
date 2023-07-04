import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import './style.css';

export function Mail({size}){
    return(
        <div className='mail'>
            <div className='mail-container'>
                <Link to='mailto:autogruas-caqueza@hotmail.com?subject=Solicitud de servicio' style={{color: 'white', textDecoration: 'none'}}>
                    <MdEmail size={size} color='white'/>
                </Link>
            </div>
        </div>
    )
}