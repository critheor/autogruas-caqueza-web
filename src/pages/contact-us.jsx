import { ContactForm } from "../components/contact-form"
import { useSearchParams } from "react-router-dom"

export default function ContactUs() {
    const [searchParams, setSearchParams] = useSearchParams();
    const tiposervicio = searchParams.get('tiposervicio');
    return(
        <div className="contactus">
            <div className="container">
                <ContactForm tipoServicio={ tiposervicio }/>
            </div>
        </div>
    )
}