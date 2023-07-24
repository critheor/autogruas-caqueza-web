
import Nequi from '../../assets/Nequi.png';
import DaviPlata from '../../assets/Daviplata.png';
import './style.css';

export function MediosDePago(){
    return(
        <div className='medios-pago'>
            <div className='container'>
                <div className='mp-title'>
                    <h3>MEDIOS DE PAGO</h3>
                </div>
                <div className='mp-item'>
                    <img 
                        src={Nequi} 
                        alt='logo nequi'
                    />
                </div>
                <div className='mp-item'>
                    <img
                        src={DaviPlata}
                        alt='logo daviplata'
                    />
                </div>
            </div>
        </div>
    )
}