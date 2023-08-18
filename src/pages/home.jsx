import { Aliados } from '../components/aliados';
import { ExperienciaComponent } from '../components/experiencia';
import { Reconocimiento } from '../components/reconocimiento';
import { ServiceComponent } from '../components/service';
import { Banner } from '../components/banner';
import './home.css';

export default function Home() {
    const handleClick = () => {
        const phoneNumber = '573219691650';
        const message = "Solicitar servicio.Por favor ingrese datos adicionales acerca de servicio.\n";  

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    return(
        <div className="home">
            <div className="container">
                <div className='row'>
                    <Banner />
                    <div className='title'>
                        <h1>INICIO</h1>
                    </div>
                    <div className='home-item'>
                        <ServiceComponent estadoBoton={'deshabilitado'}/>
                        <div className='solicitar-grua'>
                            <button
                                onClick={()=> handleClick()}
                            >
                                <h4>
                                    Solicitar una grua
                                </h4>
                            </button>
                        </div>
                    </div>
                    <div>
                        <Reconocimiento />
                    </div>
                    <div>
                        <Aliados />
                    </div>
                    <div>
                        <ExperienciaComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}