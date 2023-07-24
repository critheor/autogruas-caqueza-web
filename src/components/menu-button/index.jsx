
import { RiMenuLine } from 'react-icons/ri';
import './style.css';

export function MenuButton({openMenu, setOpenMenu}){

    const handleClicked = () => {
        setOpenMenu(!openMenu);
    }

    return(
        <div className='menu-button'>
            <button 
                onClick={() => handleClicked()}
            >
                <RiMenuLine size={35} color='white'/>
            </button>
        </div>
    )
}
