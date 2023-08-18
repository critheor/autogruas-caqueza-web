import Ike from '../../assets/ike.jpg';
import Allianz from '../../assets/allianz.jpg';
import SeguroEstado from '../../assets/seguros-del-estado.jpg';
import Liberty from '../../assets/liberty.jpg';
import Postobon from '../../assets/postobon.png';

import './style.css';

export function Aliados(){
    return(
        <div className='aliados'>
            <div className='al-title'>
                <h3>Aliados Estrategicos</h3>
            </div>
            <div className='container'>
                <div className='al-item'>
                    <img src={Ike} alt='ike logo'/>
                </div>
                <div className='al-item'>
                    <img src={Allianz} alt='Allianz logo'/>
                </div>
                <div className='al-item'>
                    <img src={SeguroEstado} alt='SeguroEstado logo'/>
                </div>
                <div className='al-item'>
                    <img src={Liberty} alt='Liberty logo'/>
                </div>
                <div className='al-item'>
                    <img src={Postobon} alt='Postobon logo' />
                </div>
            </div>
        </div>
    )
}