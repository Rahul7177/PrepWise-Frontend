import React, { useState } from 'react';
import '../stylesheets/DiscussionForum.css';

const DiscussionForum = () => {
    const [selectedSubject, setSelectedSubject] = useState('All');
    const [userInput, setUserInput] = useState('');
    const [conversations, setConversations] = useState({
        'All': [
            { id: 1, sender: 'User', subject: 'Cryptography', message: 'What is encryption?' },
            { id: 2, sender: 'Bot', subject: 'Cryptography', message: 'Encryption is the process of encoding information to protect it from unauthorized access.' },
            { id: 3, sender: 'User', subject: 'Calculus', message: 'What is the derivative of a function?' },
            { id: 4, sender: 'Bot', subject: 'Calculus', message: 'The derivative represents the rate of change of a function with respect to a variable.' },
            { id: 5, sender: 'User', subject: 'DSA', message: 'What is a linked list?' },
            { id: 6, sender: 'Bot', subject: 'DSA', message: 'A linked list is a linear data structure where elements are stored in nodes.' }
        ],
        'Cryptography': [
            { id: 1, sender: 'User', message: 'What is encryption?' },
            { id: 2, sender: 'Bot', message: 'Encryption is the process of encoding information to protect it from unauthorized access.' }
        ],
        'Calculus': [
            { id: 1, sender: 'User', message: 'What is the derivative of a function?' },
            { id: 2, sender: 'Bot', message: 'The derivative represents the rate of change of a function with respect to a variable.' }
        ],
        'DSA': [
            { id: 1, sender: 'User', message: 'What is a linked list?' },
            { id: 2, sender: 'Bot', message: 'A linked list is a linear data structure where elements are stored in nodes.' }
        ],
    });

    // Handle subject selection
    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    // Handle user input change
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    // Handle submitting a new message
    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            const newMessage = {
                id: conversations[selectedSubject].length + 1,
                sender: 'User',
                message: userInput,
            };

            // Add the user's message to the conversation
            setConversations(prevConversations => ({
                ...prevConversations,
                [selectedSubject]: [...prevConversations[selectedSubject], newMessage]
            }));

            // Clear the input field
            setUserInput('');
        }
    };

    return (
        <div className="discussion-forum">
            <h2>Discussion Forum</h2>

            {/* Subject filter */}
            <label htmlFor="subject-filter">Filter by subject:</label>
            <select id="subject-filter" onChange={handleSubjectChange}>
                <option value="All">All</option>
                <option value="Cryptography">Cryptography</option>
                <option value="Calculus">Calculus</option>
                <option value="DSA">DSA</option>
            </select>

            {/* Conversation display */}
            <div className="conversation-box">
                {conversations[selectedSubject].map((conv) => (
                    <div key={conv.id} className={`message ${conv.sender === 'User' ? 'user-message' : 'bot-message'}`}>
                        <strong>{conv.sender}:</strong> {conv.message}
                    </div>
                ))}
            </div>

            {/* Input for new messages */}
            <div className="input-box">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Type your question or message here..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default DiscussionForum;
