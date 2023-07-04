import './style.css';
import { NavigationBox } from '../navigation-box';
import { BasicInfoBox } from '../basic-info-box';
import { ContactInfoBox } from '../contact-info-box';
import { DiscoverBox } from '../discover-box';

export function Footer(){
    return(
        <footer className='app-footer'>
            <section>
                <div className='item-footer'>
                    <BasicInfoBox />
                </div>
                <div className='item-footer'>
                    <NavigationBox />
                </div>
                <div className='item-footer'>
                    <ContactInfoBox />
                </div>
                <div className='item-footer'>
                    <DiscoverBox />
                </div>
            </section>
        </footer>
    )
}