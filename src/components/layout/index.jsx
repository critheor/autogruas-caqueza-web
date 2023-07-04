import './style.css';
import { Header } from '../header';
import { Footer } from '../footer';
import { Main } from '../main';
import { WhatsApp } from '../whatsapp';

export function Layout({children}){
    return(
        <div>
            <Header />
            <Main children={children}/>
            <Footer />
            <WhatsApp width={'65px'} height={'65px'}/>
        </div>
    )
}