import { Link } from 'react-router-dom';
import { 
    RiFacebookBoxFill, 
} from 'react-icons/ri';

import './style.css';

export function Facebook(){
    return(
        <div className='facebook'>
            <div className='facebook-container'>
                <Link 
                    to='https://www.facebook.com/profile.php?id=100095037707402&mibextid=ZbWKwL'
                    style={{textDecoration: 'none', color: 'inherit'}}

                >
                    <RiFacebookBoxFill size={35}/>
                </Link>
            </div>
        </div>
    )
}