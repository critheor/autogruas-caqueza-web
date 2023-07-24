import { ServiceComponent } from '../components/service';
import { CompanyInfo } from '../components/company-info';

import './service.css';
import { ExperienciaComponent } from '../components/experiencia';

export default function Service() {
    return(
        <div className="service-wrap">
            <div className='container'>
                <div className='row'>
                    <div>
                        <ServiceComponent />
                    </div>
                    <div>
                        <CompanyInfo />
                    </div>
                    <div>
                        <ExperienciaComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}