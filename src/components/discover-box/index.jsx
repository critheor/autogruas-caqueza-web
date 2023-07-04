import { 
    RiInstagramFill, 
    RiFacebookBoxFill, 
} from 'react-icons/ri';
import { Map } from '../map';
import { Mail } from '../mail';
import './style.css';

export function DiscoverBox(){
    return(
        <article className='discover-box'>
            <h3>DISCOVER</h3>
            <ul>
                <li>Help</li>
                <li>Contact Us</li>
            </ul>
            <div className='social-media'>
                <ul>
                    <li><RiInstagramFill size={35}/></li>
                    <li><RiFacebookBoxFill size={35}/></li>
                    <li><Map size={35}/></li>
                    <li><Mail size={35}/></li>
                </ul>
            </div>
        </article>
    )
}