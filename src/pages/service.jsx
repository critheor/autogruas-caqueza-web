import { services } from '../service/services';
import { CartService } from '../components/cart-service';

import './service.css';

export default function Service() {
    return(
        <div className="service">
            <div className="container">
                <section>
                    <h2>NUESTROS SERVICIOS</h2>
                    <main>
                        {services.map((item,index) => {
                            return <CartService 
                                key={index} imagen={item.image} 
                                description={item.description}
                                title={item.title}
                                />;
                        })}
                    </main>
                </section>
            </div>
        </div>
    )
}