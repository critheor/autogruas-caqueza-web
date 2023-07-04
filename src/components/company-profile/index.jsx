import './style.css';

export function CompanyProfile({title, descripcion}){
    return(
        <article className='company-profile'>
            <div className='company-profile-container'>
                <div className='company-profile-title'>
                    <h2> { title }</h2>
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