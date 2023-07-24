import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import './style.css';

export function LogoNameCompany(){
    return(
        <div className='logo-name-company'>
            <div className='logo'>
                <Link
                    to='/' 
                    style={{color: 'inherit', textDecoration: 'none'}}
                >
                    <img src={Logo} alt='logo'/>
                </Link>
            </div>
            <div className='name-company'>
                <h2>Autogruas<br></br> Caqueza</h2>
            </div>
        </div>
    )
}