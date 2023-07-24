import { CompanyProfile } from '../components/company-profile';
import { companyProfileInfo } from '../service/company-profile';
import { CompanyInfo } from '../../src/components/company-info';

import './about-us.css';

export default function AboutUs() {
    return(
        <div className='about-wrap'>
            <div className='aw-container'>
                <div className='aw-row'>
                    <div className='title'>
                        <h1><b>NOSOTROS</b></h1>
                    </div>
                    <div className='info-us'>
                    {
                        companyProfileInfo.map((item, key)=>{
                            return (<CompanyProfile  
                                title={item.title} 
                                descripcion={item.descripcion}
                            />)
                        })
                    }                                                                                                                                                                                                                                                                                                                                                              
                    </div>
                </div>
            </div>
        </div>
    )
}