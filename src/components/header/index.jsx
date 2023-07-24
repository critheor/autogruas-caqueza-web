import { useState } from 'react';
import { LogoNameCompany } from '../logo-name-company';
import { MenuButton } from '../menu-button';
import { Menu } from '../menu';

import './style.css';

export function Header(){
    const [openMenu, setOpenMenu] = useState(false);
    return(
        <header className='wrap-header'>
            <div className='container'>
                <div className='row'>
                    <div className='item-lc logo-company'>
                        <LogoNameCompany />
                    </div>
                    <nav className='nav-header item-nh'>
                        <ul>
                            <li>
                                <div className='menu-mobile'>
                                    <MenuButton 
                                        openMenu={openMenu}
                                        setOpenMenu={setOpenMenu}
                                    />
                                </div>
                                <div className='menu-desktop'>
                                    <Menu 
                                        openMenu={setOpenMenu}
                                    />
                                </div>
                            </li>
                        </ul>
                    </nav> 
                </div>
                {openMenu && <Menu openMenu={setOpenMenu}/>}
            </div>
        </header>
    )
}