import './style.css';

import { Link } from 'react-router-dom';

export function Menu({toggled, setToggled}){
    return(
        <section className='app-menu'>
            <nav>
                <ul>
                    <li className='item-menu'>
                        <button onClick={()=>setToggled(!toggled)}>
                            <Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>HOME</Link>
                        </button>
                    </li>
                    <li className='item-menu'>
                        <button onClick={()=>setToggled(!toggled)}>
                            <Link to='about' style={{color: 'inherit', textDecoration: 'none'}}>ABOUT</Link>
                        </button>
                    </li>
                    <li className='item-menu'>
                        <button onClick={()=>setToggled(!toggled)}>
                            <Link to='service' style={{color: 'inherit', textDecoration: 'none'}}>SERVICE</Link>
                        </button>
                    </li>
                    <li className='item-menu'>
                        <button onClick={()=>setToggled(!toggled)}>
                            <Link to='contact' style={{color: 'inherit', textDecoration: 'none'}}>CONTACT US</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    )
}