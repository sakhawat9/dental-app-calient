import React from 'react';
import ServiceBanner from '../common/ServiceBanner';
import ContactForm from '../components/ContactForm';
import ContactInformaTion from '../components/ContactInformaTion';

const Contact = () => {
    return (
        <div>
            <ServiceBanner title="Contact Us" />
            <ContactInformaTion />
            <ContactForm />
        </div>
    );
};

export default Contact;