import { services } from '../../service/services';
import { CardService } from '../card-service';

import './style.css';

export function ServiceComponent({estadoBoton}){
    return(
        <section className='service-component'>
            <div className='title-services'>
             <h2>NUESTROS SERVICIOS</h2>
             <h5>de grua 24 horas via Bogota - Villavicencio</h5>
            </div>
            <main>
                {services.map((item,index) => {
                    return(
                        <CardService 
                            key={index} imagen={item.image} 
                            description={item.description}
                            title={item.title}
                            estadoBoton={estadoBoton}
                        />
                    )
                })}
            </main>
        </section>
    )
}