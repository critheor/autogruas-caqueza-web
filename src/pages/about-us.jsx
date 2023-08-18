import { CompanyProfile } from '../components/company-profile';
import { companyProfileInfo } from '../service/company-profile';
import { ExperienciaComponent } from '../components/experiencia';

import './about-us.css';

export default function AboutUs() {
    const flexDirection = {
        'rowreverse': 'row-reverse',
        'row': 'row',
    }

    return(
        <div className='about-wrap'>
            <div className='aw-container'>
                <div className='aw-row'>
                    <div className='title'>
                        <h1><b>NOSOTROS</b></h1>
                    </div>
                    <div className='info-us'>
                    {
                        companyProfileInfo.map((item, index)=>{
                            return (<CompanyProfile  
                                title={item.title} 
                                descripcion={item.descripcion}
                                imagen={item.imagen}
                                color={item.color}
                                rowdirection={index % 2 === 0? flexDirection['row'] : flexDirection['rowreverse']}
                            />)
                        })
                    }                                                                                                                                                                                                                                                                                                                                                              
                    </div>
                    <div>
                        <ExperienciaComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}