import React, { useState } from 'react';
import '../stylesheets/Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send message to an API)
        alert('Your message has been sent!');
    };

    return (
        <div className="contact-container" id='contact'>
            <h2>Contact Us</h2>
            <div className="contact-cards">
                <div className="contact-card">
                    <h3>Address</h3>
                    <p>123 PrepWise Street, City, Country</p>
                </div>
                <div className="contact-card">
                    <h3>Phone</h3>
                    <p>+1 234 567 890</p>
                </div>
                <div className="contact-card">
                    <h3>Email</h3>
                    <p>support@prepwise.com</p>
                </div>
            </div>
            <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
