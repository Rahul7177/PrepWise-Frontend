import React, { useState } from 'react';
import '../stylesheets/DiscussionForum.css';

const DiscussionForum = () => {
    const [selectedSubject, setSelectedSubject] = useState('All');
    const [userInput, setUserInput] = useState('');
    const [conversations, setConversations] = useState({
        'All': [],
        'Cryptography': [],
        'Calculus': [],
        'DSA': []
    });
    const [loading, setLoading] = useState(false);

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = async () => {
        
    };

    return (
        <div className="discussion-forum">
            <h2>Discussion Forum</h2>

            <label htmlFor="subject-filter">Filter by subject:</label>
            <select id="subject-filter" onChange={handleSubjectChange}>
                <option value="All">All</option>
                <option value="Cryptography">Cryptography</option>
                <option value="Calculus">Calculus</option>
                <option value="DSA">DSA</option>
            </select>

            <div className="conversation-box">
                {conversations[selectedSubject].map((conv) => (
                    <div key={conv.id} className={`message ${conv.sender === 'User' ? 'user-message' : 'bot-message'}`}>
                        <strong>{conv.sender}:</strong> {conv.message}
                    </div>
                ))}
                {loading && <div>Loading response...</div>}
            </div>

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
