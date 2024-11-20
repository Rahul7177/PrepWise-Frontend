import React, { useState, useEffect } from 'react';
import { firestoreDb } from '../firebase'; // Firestore instance from your Firebase setup
import { collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';
import '../stylesheets/Forum.css';
import Navbar from '../components/Navbar';
import Chatbot from '../components/chatbot';
import MusicPlayer from '../components/MusicPlayer';

const Forum = () => {
    const [subject, setSubject] = useState('All');
    const [doubts, setDoubts] = useState([]);
    const [newDoubt, setNewDoubt] = useState('');

    const subjects = ['All', 'Cryptography', 'Data Structures', 'Calculus', 'DBMS', 'Networks', 'C++ Programming'];

    useEffect(() => {
        // Real-time listener for doubts
        const q = query(collection(firestoreDb, 'doubts'), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedDoubts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setDoubts(fetchedDoubts);
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, []);

    const handlePostDoubt = async () => {
        if (newDoubt.trim() === '') return;

        try {
            await addDoc(collection(firestoreDb, 'doubts'), {
                text: newDoubt,
                subject: subject === 'All' ? 'General' : subject,
                timestamp: new Date(),
            });

            setNewDoubt('');
            alert('Doubt posted successfully!');
        } catch (error) {
            console.error('Error posting doubt:', error);
            alert('Failed to post your doubt. Please try again.');
        }
    };

    // Filter doubts based on selected subject
    const filteredDoubts = subject === 'All'
        ? doubts
        : doubts.filter((doubt) => doubt.subject === subject);

    return (
        <>
        <Navbar/>
        <Chatbot/>
        <MusicPlayer/>
        <div className='forum-container'>
        <div className="forum">
            <h1>Discussion Forum</h1>
            <div className="forum-filters">
                <label htmlFor="subject-filter">Filter by Subject:</label>
                <select id="subject-filter" value={subject} onChange={(e) => setSubject(e.target.value)}>
                    {subjects.map((sub) => (
                        <option key={sub} value={sub}>
                            {sub}
                        </option>
                    ))}
                </select>
            </div>
            <div className="doubt-list">
                {filteredDoubts.map((doubt) => (
                    <div className="doubt-item" key={doubt.id}>
                        <p>{doubt.text}</p>
                        <span className="doubt-subject">Subject: {doubt.subject}</span>
                    </div>
                ))}
                {filteredDoubts.length === 0 && <p>No doubts available for the selected subject.</p>}
            </div>
            <div className="doubt-form">
                <textarea
                    value={newDoubt}
                    onChange={(e) => setNewDoubt(e.target.value)}
                    placeholder="Post your doubt..."
                />
                <button onClick={handlePostDoubt}>Post Doubt</button>
            </div>
        </div>
        </div>
        </>
    );
};

export default Forum;
