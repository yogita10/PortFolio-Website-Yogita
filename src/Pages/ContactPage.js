import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.7390930067!2d76.81307038634928!3d28.646677254552095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1628228232087!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 8882399925'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'yogita10.work@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Delhi, India'} title={'Located In'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
