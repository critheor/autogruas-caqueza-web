import './style.css';
import WhatsAppLogo from '../../assets/whatsapp.png';

export function WhatsApp({width, height}){

    const handleClick = () => {
        const phoneNumber = '573219691650';
        const message = 'solicitar servicio';

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    return(
        <div className='whatsapp'>
            <div className='whatsapp-conatiner'>
                <button onClick={handleClick}>
                    <img src={WhatsAppLogo} alt='logo de Whatsapp' width = {width} height = {height}/>
                </button>
            </div>
        </div>
    )
}