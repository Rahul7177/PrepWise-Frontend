import React, { useState } from 'react';
import bot from '../assets/chatbot.png'
import '../stylesheets/Chatbot.css'; // Add appropriate styles
import DiscussionForum from './DiscussionForum';

const Chatbot = () => {
    const [openForum, setOpenForum] = useState(false);

    const toggleForum = () => {
        setOpenForum(!openForum);
    };

    return (
        <>
            {/* Chatbot Icon */}
            <div className="chatbot-icon" onClick={toggleForum}>
                <img src={bot} alt="Chatbot" />
            </div>

            {/* Discussion Forum */}
            {openForum && (
                <div className="discussion-forum">
                    <DiscussionForum />
                </div>
            )}
        </>
    );
};

export default Chatbot;

