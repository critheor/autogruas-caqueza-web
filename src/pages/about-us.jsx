import { CompanyProfile } from '../components/company-profile';
import { companyProfileInfo } from '../service/company-profile';
import './about-us.css';

export default function AboutUs() {
    return(
        <div className="about-us">
            <div className='title'>
                <h2>ACERCA DE NOSOTROS</h2>
            </div>
            <div className="container">
                {
                    companyProfileInfo.map((item, key) => {
                        return <CompanyProfile title={item.title} descripcion={item.descripcion} key={key}/>    
                    })
                }
            </div>
        </div>
    )
}