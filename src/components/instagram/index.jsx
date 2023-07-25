import './style.css';
import {  Link } from 'react-router-dom';
import { 
    RiInstagramFill, 
} from 'react-icons/ri';

export function Instagram({size, color}){
    return(
        <div className='instagram'>
            <div className='instagram-container'>
                    <Link 
                        to='https://instagram.com/autogruascaquezar2sas?igshid=NGExMmI2YTkyZg=='
                        style={{textDecoration: 'none', color: 'inherit'}}
                    >
                        <RiInstagramFill size={size} color={color}/>
                    </Link>
            </div>
        </div>
    )
}