import { Link } from 'react-router-dom';
import './style.css';
import { FiPhone } from 'react-icons/fi';

export function Phone(){
    return (
        <div className='phone'>
            <div className='phone-container'>
                <Link to='tel:3219691650' style={{color: 'inherit', textDecoration: 'none'}}>
                    <FiPhone size={50} />
                </Link>
            </div>
        </div>
    )
}