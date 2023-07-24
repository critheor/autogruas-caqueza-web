import { GiPodiumWinner } from 'react-icons/gi';
import { SiCashapp } from 'react-icons/si';
import { GiCarWheel } from 'react-icons/gi';
import { FaCreditCard } from 'react-icons/fa';
import './style.css';

export function Reconocimiento(){
    return(
        <div className='reconocimiento'>
            <div className='container'>
                <div className='row'>
                    <div className='rc-item'>
                        <GiPodiumWinner size={60} />
                        <h4>Experiencia</h4>
                        <h5>Contamos con mas de 20 anios de experiencia</h5>
                    </div>
                    <div className='rc-item'>
                        <SiCashapp size={60}/>
                        <h4>Excelentes precios</h4>
                        <h5>Prestamos servicio de calidad a un precio justo</h5>
                    </div>
                    <div className='rc-item'>
                        <GiCarWheel size={60}/>
                        <h4>Servicio agil</h4>
                        <h5>Estamos disponibles las 24 horas del dia, 
                            los 7 dias de la semana.
                        </h5>
                    </div>
                    <div className='rc-item'>
                        <FaCreditCard size={60}/>
                        <h4>Pagos</h4>
                        <h5>Recibimos gran variedad de medios de pago</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}