import { Link } from 'react-router-dom';
import './style.css';
import { RiPhoneFill } from 'react-icons/ri';

export function Phone({size}){
    return (
        <div className='phone'>
            <div className='phone-container'>
                <Link to='tel:3219691650' style={{color: 'inherit', textDecoration: 'none'}}>
                    <RiPhoneFill size={size} fill={'white'}/>
                </Link>
            </div>
        </div>
    )
}