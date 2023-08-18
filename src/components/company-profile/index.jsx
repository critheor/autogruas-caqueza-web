import './style.css';

export function CompanyProfile({title, descripcion, imagen, color, rowdirection}){
    return(
        <article className='company-profile'>
            <div className='company-profile-container' style={{flexDirection: rowdirection}}>
                <div className='cp-imagen'>
                    <img src={imagen} alt='imagen perfil empresa'/>
                </div>
                <div className='cp-detalles' style={{backgroundColor: color}}>
                    <div>
                        <div className='company-profile-title'>
                            <h3> { title }</h3>
                        </div>
                        <div className='company-profile-info'>
                            <p>
                                { descripcion }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}