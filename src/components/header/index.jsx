import './style.css';
import Logo from '../../assets/logo.png';
//import imagePrincipal from '../../assets/autogruas-caqueza-fondo-1.jpeg';
import { RiMenuLine } from 'react-icons/ri';
import { Menu } from '../menu';
import { useState } from 'react';

export function Header(){
    const [toggled, setToggled] = useState(false);
    return(
        <header className='app-header'>
            <nav>
                <ul>
                    <li className='li-header'>
                        <div>
                            <img src={Logo} alt='logo'/>
                        </div>
                        <div className='name-company'>
                            Autogruas Caqueza<br></br>
                            <p>
                                <b>
                                    servicio 24 horas<br></br>
                                    Via Bogotá-Villavicencio
                                </b>
                            </p>
                        </div>
                    </li>
                        
                    <li className='header-menu'>
                        <button 
                            className='header-button-menu'
                            onClick={() => setToggled(!toggled)}
                        >
                            <RiMenuLine size={24} color='white'/>
                        </button>
                    </li>
                </ul>
            </nav>
            <div className={toggled ? 'drop-menu-block': 'drop-menu-none'}>
                <Menu toggled={toggled} setToggled={setToggled}/>
            </div>    
            {/*
                <div className='baner-pc'>
                    <img className='principal-img' src={imagePrincipal} alt='imagen empresarial'/>
                </div>
            */}
        </header>
    )
}