import './style.css';
import { Header } from '../header';
import { Footer } from '../footer';
import { WhatsApp } from '../whatsapp';
import { ContactBar } from '../contact-bar';
import {  Main } from '../main';

export function Layout({children}){
    return(
        <div>
            <Header />
            <ContactBar size={28} color={'white'}/>
            <Main children={children}/>
            <Footer />
            <WhatsApp width={'65px'} height={'65px'}/>
        </div>
    )
}