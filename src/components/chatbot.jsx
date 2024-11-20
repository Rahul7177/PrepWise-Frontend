import React, { useState, useEffect } from 'react';
import bot from '../assets/chatbot.png';
import '../stylesheets/Chatbot.css';

const Chatbot = () => {
    const [isBotOpen, setIsBotOpen] = useState(false);

    const toggleBot = () => {
        setIsBotOpen(!isBotOpen);
        if (!isBotOpen) {
            window.BotpressWebChat.open();
        } else {
            window.BotpressWebChat.close();
        }
    };

    useEffect(() => {
        const botScript1 = document.createElement('script');
        botScript1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
        botScript1.async = true;
        document.body.appendChild(botScript1);

        const botScript2 = document.createElement('script');
        botScript2.src = 'https://files.bpcontent.cloud/2024/11/19/15/20241119155827-B2WYXIOM.js';
        botScript2.async = true;
        document.body.appendChild(botScript2);

        return () => {
            document.body.removeChild(botScript1);
            document.body.removeChild(botScript2);
        };
    }, []);

    return (
        <>
            
            <div className="chatbot-icon" onClick={toggleBot}>
                <img src={bot} alt="Chatbot" />
            </div>

            {isBotOpen && (
                <div className="bot-dialog">
                    <div className="bot-header">
                        <span>Chatbot</span>
                        <button className="close-button" onClick={toggleBot}>
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
