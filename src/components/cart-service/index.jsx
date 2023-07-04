import { Link } from 'react-router-dom';
import scroll from '../../utilities/scroll';
import './style.css';

export function CartService({ imagen, description, title}) {
    return(
        <article className='cart-service'>
            <div className='cart-service-container'>
                <div className='cart-service-image'>
                    <img src={imagen} alt='vehicule'/>
                </div>
                <div className='cart-service-title'>
                    <h3>{title}</h3>
                </div>
                <div className='cart-service-description'>
                    <div className='description'>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='cart-service-contact-us'>
                    <button onClick={()=> scroll()}>
                        <h4>
                            <Link
                                to={`/contact?tiposervicio=${title}`}
                                style={{color: 'black', textDecoration: 'none'}}
                            >
                                SOLICITAR SERVICIO
                            </Link>
                        </h4>
                    </button>
                </div>
            </div>
        </article>
    )
}