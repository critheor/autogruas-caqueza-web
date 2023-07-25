import { Map } from '../map';
import { Mail } from '../mail';
import { Instagram } from '../instagram';
import { Facebook } from '../facebook';

import './style.css';

export function DiscoverBox({size, color}){
    return(
        <article className='discover-box'>
            <h3>ENCUENTRANOS EN</h3>
            <div className='social-media'>
                <ul>
                    <li className='sm-item'>
                        <Instagram size={size} color={color}/>
                    </li>
                    <li className='sm-item'>
                        <Facebook size={size} color={color}/>
                    </li>
                    <li className='sm-item'>
                        <Map size={size} color={color}/>
                    </li>
                    <li className='sm-item'>
                        <Mail size={size} color={color}/>
                    </li>
                </ul>
            </div>
        </article>
    )
}