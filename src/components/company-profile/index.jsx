import './style.css';

export function CompanyProfile({title, descripcion}){
    return(
        <article className='company-profile'>
            <div className='company-profile-container'>
                <div className='company-profile-title'>
                    <h3> { title }</h3>
                </div>
                <div className='company-profile-info'>
                    <p>
                        { descripcion }
                    </p>
                </div>
            </div>
        </article>
    )
}