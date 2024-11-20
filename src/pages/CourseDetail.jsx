import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Chatbot from '../components/chatbot';
import MusicPlayer from '../components/MusicPlayer';
import '../stylesheets/CourseDetail.css';
import { firestoreDb } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import cryptographyModules from '../courseData/Cryptography';
import dataStructuresModules from '../courseData/DataStructures';
import calculusModules from '../courseData/Calculus';
import dbmsModules from '../courseData/DBMS';
import computerNetworksModules from '../courseData/ComputerNetworks';
import cppProgrammingModules from '../courseData/CppProgramming';

const normalizeCourseName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const CourseDetail = () => {
    const { courseName } = useParams();
    const { currentUser } = useAuth();
    const [progress, setProgress] = useState({});
    const [timeSpent, setTimeSpent] = useState({});
    const [activeModule, setActiveModule] = useState(null);
    const [activeTab, setActiveTab] = useState({});
    const subjectModules = {
        cryptography: cryptographyModules,
        'data structures and algorithms': dataStructuresModules,
        calculus: calculusModules,
        dbms: dbmsModules,
        'computer networks': computerNetworksModules,
        'c++ programming': cppProgrammingModules,
    };
    const modules = subjectModules[courseName] || [];
    const INTERVAL_MS = 1000;

    useEffect(() => {
        const fetchProgress = async () => {
            if (!currentUser) return;
            const docRef = doc(firestoreDb, `users/${currentUser.uid}/progress`, courseName);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setProgress(data.progress || {});
                setTimeSpent(data.timeSpent || {});
            }
        };
        fetchProgress();
    }, [courseName, currentUser]);

    const saveProgress = useCallback(async () => {
        if (!currentUser) return;

        try {
            const docRef = doc(firestoreDb, `users/${currentUser.uid}/progress`, courseName);
            await setDoc(docRef, { progress, timeSpent }, { merge: true });
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    }, [currentUser, courseName, progress, timeSpent]);

    useEffect(() => {
        if (Object.keys(progress).length > 0 || Object.keys(timeSpent).length > 0) {
            saveProgress();
        }
    }, [progress, timeSpent, saveProgress]);

    useEffect(() => {
        if (!activeModule) return;

        const intervalId = setInterval(() => {
            setTimeSpent((prev) => ({
                ...prev,
                [activeModule]: (prev[activeModule] || 0) + 1,
            }));
        }, INTERVAL_MS);

        return () => clearInterval(intervalId);
    }, [activeModule]);

    const handleScroll = (moduleId) => {
        const moduleElement = document.getElementById(`module-${moduleId}`);
        if (moduleElement) {
            const { scrollTop, scrollHeight, clientHeight } = moduleElement;
            const percentage = Math.min(100, ((scrollTop / (scrollHeight - clientHeight)) * 100).toFixed(2));

            setProgress((prev) => {
                if ((prev[moduleId] || 0) < percentage) {
                    return {
                        ...prev,
                        [moduleId]: percentage,
                    };
                }
                return prev;
            });

            if (activeModule !== moduleId) setActiveModule(moduleId);
        }
    };

    const toggleTab = (moduleId, tab) => {
        setActiveTab((prev) => ({
            ...prev,
            [moduleId]: prev[moduleId] === tab ? null : tab,
        }));
    };

    return (
        <>
            <Navbar />
            <MusicPlayer />
            <Chatbot />
            <div className="course-detail-page">
                <h1 className="course-detail-h1">{normalizeCourseName(courseName)}</h1>
                {modules.length > 0 ? (
                    <div className="notes-container">
                        {modules.map((module) => (
                            <div
                                key={module.id}
                                id={`module-${module.id}`}
                                className="module-card"
                                onScroll={() => handleScroll(module.id)}
                            >
                                <h2 className="module-title">{module.title}</h2>
                                <div className="module-tabs">
                                    <button
                                        className={`tab-button ${activeTab[module.id] === 'notes' ? 'active' : ''}`}
                                        onClick={() => toggleTab(module.id, 'notes')}
                                    >
                                        Notes
                                    </button>
                                    <button
                                        className={`tab-button ${activeTab[module.id] === 'videos' ? 'active' : ''}`}
                                        onClick={() => toggleTab(module.id, 'videos')}
                                    >
                                        Videos
                                    </button>
                                </div>
                                {activeTab[module.id] === 'notes' && (
                                    <div className="notes-content">
                                        {module.notes.map((note) => (
                                            <div key={note.id} className="note-item">
                                                <p>{note.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {activeTab[module.id] === 'videos' && (
                                    <div className="videos-content">
                                        {module.videos.map((video) => (
                                            <div key={video.id} className="video-item">
                                                <a href={video.url} target="_blank" rel="noopener noreferrer">
                                                    {video.title}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <progress value={progress[module.id] || 0} max="100" />
                                <p>Progress: {(progress[module.id] || 0).toFixed(2)}%</p>
                                <p>Time Spent: {Math.floor((timeSpent[module.id] || 0) / 60)} min</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No modules available for this course.</p>
                )}
            </div>
        </>
    );
};

export default CourseDetail;
