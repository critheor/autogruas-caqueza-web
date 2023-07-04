import { Link } from 'react-router-dom';
import { RiMapPinFill } from 'react-icons/ri';

import './style.css';

export function Map({size}){
    return(
        <div className='map'>
            <div className='map-container'>
                <Link 
                    to='https://www.google.com/maps/place/Cra.+3+%233-42,+Chipaque,+Cundinamarca/@4.4422848,-74.0460611,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3fa4c67433cc21:0x2c88f514d54bf26e!8m2!3d4.4422795!4d-74.0434808?entry=ttu'
                    style={{textDecoration: 'none', color: 'inherit'}}
                >
                    <RiMapPinFill size={size}/>
                </Link>
            </div>
        </div>
    )
}