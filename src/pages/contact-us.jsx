// import { ContactForm } from "../components/contact-form"
// import { useSearchParams } from "react-router-dom"
// import { MediosDeContacto } from '../components/medios-de-contacto';
import { MediosDeContacto } from '../components/medios-de-contacto';
import './contact-us.css';

export default function ContactUs() {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const tiposervicio = searchParams.get('tiposervicio');
    return(
        <div className="contactus">
            <div className="container-contact-us">
                <MediosDeContacto size={40} color={'black'}/>
            </div>
        </div>
    )
}