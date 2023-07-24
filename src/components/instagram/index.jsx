import './style.css';
import {  Link } from 'react-router-dom';
import { 
    RiInstagramFill, 
    RiFacebookBoxFill, 
} from 'react-icons/ri';

export function Instagram(){
    return(
        <div className='instagram'>
            <div className='instagram-container'>
                    <Link 
                        to='https://instagram.com/autogruascaquezar2sas?igshid=NGExMmI2YTkyZg=='
                        style={{textDecoration: 'none', color: 'inherit'}}
                    >
                        <RiInstagramFill size={35}/>
                    </Link>
            </div>
        </div>
    )
}