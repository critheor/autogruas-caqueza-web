import { Link } from 'react-router-dom';

import './style.css';


export function Menu({openMenu}){

    const handleClick = ()=>{
        openMenu(false);
    }

    return(
        <div className='app-menu'>
            <nav>
                <ul>
                    <li className='item-menu'>
                        <button
                            onClick={()=> handleClick()}
                        >
                            <Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>INICIO</Link>
                        </button>
                    </li>
                    <li className='item-menu'>
                        <button
                            onClick={()=> handleClick()}
                        >
                            <Link to='about' style={{color: 'inherit', textDecoration: 'none'}}>ACERCA</Link>
                        </button>
                    </li>
                    <li className='item-menu'>
                        <button
                            onClick={()=> handleClick()}
                        >
                            <Link to='service' style={{color: 'inherit', textDecoration: 'none'}}>SERVICIOS</Link>
                        </button>
                    </li>
                    <li className='item-menu'>
                        <button
                            onClick={()=> handleClick()}
                        >
                            <Link to='contact' style={{color: 'inherit', textDecoration: 'none'}}>CONTACTO</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}