import React from 'react';
import './Contact.css';

const Contact = () => {
    document.title="Let'sGO!/Contact";
    return (
        <div className="container text-center contact">
            <div>
                <h1>Let's<span className="text-primary">GO!</span></h1>
                <p>68 Shukrabad, Dhanmondi 32</p>
                <p>Dhaka</p>
            </div>
        </div>
    );
};

export default Contact;