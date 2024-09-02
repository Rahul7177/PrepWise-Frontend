// src/components/Chatbot.js
import React from 'react';
import '../stylesheets/Chatbot.css'; // Import the CSS for styling
import bot from '../assets/chatbot.png'

const Chatbot = () => {
    const handleClick = () => {
        alert('Chatbot clicked!'); // Replace with your chatbot logic
    };

    return (
        <div className="chatbot-icon" onClick={handleClick}>
            <img src={bot} alt="Chatbot Icon" />
        </div>
    );
};

export default Chatbot;
