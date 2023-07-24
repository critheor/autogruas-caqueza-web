import { Map } from '../map';
import { Mail } from '../mail';
import { Instagram } from '../instagram';
import { Facebook } from '../facebook';

import './style.css';

export function DiscoverBox(){
    return(
        <article className='discover-box'>
            <h3>ENCUENTRANOS EN</h3>
            <div className='social-media'>
                <ul>
                    <li className='sm-item'><Instagram /></li>
                    <li className='sm-item'><Facebook /></li>
                    <li className='sm-item'><Map size={35}/></li>
                    <li className='sm-item'><Mail size={35}/></li>
                </ul>
            </div>
        </article>
    )
}