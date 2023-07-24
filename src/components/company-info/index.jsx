
import collage from '../../assets/collage.png';
import './style.css';


export function CompanyInfo(){
    return(
        <div className='company-info-wrapper'>
            <div className='container'>
                <div className='cm-row'>
                    <div className='collage'>
                        <img src={collage} alt='collage' />
                    </div>
                    <div className='cm-info'>
                        <div className='title'>
                            <h2>Asistencia para tu vehiculo</h2>
                        </div>
                        <div className='descripcion'>
                            <p>
                                En Autogruas Caqueza, nos enorgullece ser su socio 
                                confiable en el traslado de vehículos en la ruta Bogotá - Villavicencio. 
                                Ya sea que necesite asistencia en caso de una avería o simplemente necesite transportar 
                                su vehículo de un lugar a otro, puede contar con nosotros para un servicio excepcional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}