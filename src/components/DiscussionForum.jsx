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
    const [loading, setLoading] = useState(false); // For loading indicator

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = async () => {
        if (userInput.trim() !== '') {
            const newMessage = {
                id: conversations[selectedSubject].length + 1, // Using the conversation length for id
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

            setLoading(true);

            try {
                const aiResponse = await fetch('http://localhost:5000/api/ask-openai', {  // Backend endpoint updated
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        question: userInput,  // Pass the user input to the AI
                    }),
                });

                const data = await aiResponse.json();

                const botMessage = {
                    id: conversations[selectedSubject].length + 2, // Incrementing id for bot message
                    sender: 'Bot',
                    message: data.answer, // AI's response
                };

                setConversations(prevConversations => ({
                    ...prevConversations,
                    [selectedSubject]: [...prevConversations[selectedSubject], botMessage]
                }));
            } catch (error) {
                console.error("Error with AI request:", error);
            }

            setLoading(false);
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
                {loading && <div>Loading response...</div>}
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
