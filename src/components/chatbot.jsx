import React, { useState, useEffect } from 'react';
import bot from '../assets/chatbot.png';
import '../stylesheets/Chatbot.css';

const Chatbot = () => {
    const [isBotOpen, setIsBotOpen] = useState(false);
    const [botLoaded, setBotLoaded] = useState(false); // Tracks if the bot scripts are loaded successfully

    const toggleBot = () => {
        if (!botLoaded) {
            console.error('Chatbot scripts are not loaded yet.');
            return;
        }

        try {
            setIsBotOpen(!isBotOpen);
            if (!isBotOpen && window.BotpressWebChat) {
                window.BotpressWebChat.open();
            } else if (isBotOpen && window.BotpressWebChat) {
                window.BotpressWebChat.close();
            }
        } catch (error) {
            console.error('Error toggling the chatbot:', error);
        }
    };

    useEffect(() => {
        const botScript1 = document.createElement('script');
        botScript1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
        botScript1.async = true;
        botScript1.onload = () => setBotLoaded(true); // Mark the bot as loaded when the script loads successfully
        botScript1.onerror = () => console.error('Failed to load BotPress script 1.');
        document.body.appendChild(botScript1);

        const botScript2 = document.createElement('script');
        botScript2.src = 'https://files.bpcontent.cloud/2024/11/19/15/20241119155827-B2WYXIOM.js';
        botScript2.async = true;
        botScript2.onerror = () => console.error('Failed to load BotPress script 2.');
        document.body.appendChild(botScript2);

        return () => {
            document.body.removeChild(botScript1);
            document.body.removeChild(botScript2);
        };
    }, []);

    return (
        <>
            {/* Chatbot Icon */}
            <div className="chatbot-icon" onClick={toggleBot}>
                <img src={bot} alt="Chatbot" />
            </div>

            {/* Display a dialog box if bot is toggled on */}
            {isBotOpen && botLoaded && (
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
