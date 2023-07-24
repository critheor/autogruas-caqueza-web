import './style.css';

export function CartService({ imagen, description, title, estadoBoton}) {
    const estadosBoton = {
        activo: 'boton-activo',
        deshabilitado: 'boton-deshabilitado',
    }

    const handleClick = () => {
        const phoneNumber = '573219691650';
        const message = 'solicitar servicio';

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    const estadoActualBoton = estadoBoton || 'activo';

    return(
        <article className='cart-service'>
            <div className='cart-service-container'>
                <div className='image-wrapper'>
                    <img src={imagen} alt='imagen servicio'/>
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
                    <button 
                        onClick={()=> {
                            handleClick();
                        }}
                        className={estadosBoton[estadoActualBoton]}
                    >
                        <h4>
                            SOLICITAR SERVICIO
                        </h4>
                    </button>
                </div>
            </div>
        </article>
    )
}