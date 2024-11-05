import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Chatbot from '../components/chatbot';
import '../stylesheets/CourseDetail.css';
import MusicPlayer from '../components/MusicPlayer';

const CourseDetail = () => {
    const { courseName } = useParams();
    const [expandedModules, setExpandedModules] = useState({});
    const [activeTab, setActiveTab] = useState({});

    const toggleModule = (moduleId) => {
        setExpandedModules(prevState => ({
            ...prevState,
            [moduleId]: !prevState[moduleId]
        }));
    };

    const setTab = (moduleId, tab) => {
        setActiveTab(prevState => ({
            ...prevState,
            [moduleId]: tab
        }));
    };

    const modules = [
        {
            id: 1,
            title: "Module 1: Introduction to Cryptography and Number Theory",
            notes: [
                {
                    id: 1,
                    title: "Finite Fields and Number Theory",
                    content: (
                        <>
                            <h3 className="note-subheading">Finite Fields</h3>
                            <p className="note-text">Finite fields, or Galois fields, are algebraic structures in which addition, subtraction, multiplication, and division are performed, except division by zero. They are crucial in cryptographic algorithms like AES.</p>
                            <ul className="note-list">
                                <li>Applications: Used in public key cryptosystems and error-correcting codes.</li>
                            </ul>
                            <h4 className="note-subheading">Number Theory</h4>
                            <p className="note-text">Deals with integers, primes, GCDs, and modular arithmetic, fundamental in encryption like RSA.</p>
                            <p className="note-example"><b>Example:</b> In a field of size 7, (4 + 3) mod 7 = 0.</p>
                        </>
                    )
                },
                {
                    id: 2,
                    title: "Modular Arithmetic",
                    content: (
                        <>
                            <h3 className="note-subheading">Modular Arithmetic</h3>
                            <p className="note-text">Modular arithmetic is arithmetic for integers where numbers wrap around after reaching a modulus.</p>
                            <ul className="note-list">
                                <li>It is similar to clock arithmetic.</li>
                                <li>Used in cryptography for reducing numbers to manageable sizes (e.g., RSA).</li>
                            </ul>
                            <p className="note-example"><b>Example:</b> 13 mod 12 = 1 (like 1 o'clock).</p>
                        </>
                    )
                },
                {
                    id: 2,
                    title: "Modular Arithmetic",
                    content: (
                        <>
                            <h3 className="note-subheading">Modular Arithmetic</h3>
                            <p className="note-text">Modular arithmetic is arithmetic for integers where numbers wrap around after reaching a modulus.</p>
                            <ul className="note-list">
                                <li>It is similar to clock arithmetic.</li>
                                <li>Used in cryptography for reducing numbers to manageable sizes (e.g., RSA).</li>
                            </ul>
                            <p className="note-example"><b>Example:</b> 13 mod 12 = 1 (like 1 o'clock).</p>
                        </>
                    )
                },
                {
                    id: 3,
                    title: "Euclidean Algorithm",
                    content: (
                        <>
                            <h3 className="note-subheading">Euclidean Algorithm</h3>
                            <p className="note-text">The Euclidean Algorithm is a method for finding the greatest common divisor (GCD) of two integers. It’s used in cryptography for calculating the multiplicative inverse in RSA encryption.</p>
                            <h4 className="note-subheading">Steps:</h4>
                            <ul className="note-list">
                                <li>Divide the larger number by the smaller one.</li>
                                <li>Repeat using the remainder until the remainder is zero.</li>
                                <li>The last non-zero remainder is the GCD.</li>
                            </ul>
                            <p className="note-example"><b>Example:</b> To find the GCD of 56 and 15, divide repeatedly: GCD(56, 15) = 1.</p>
                        </>
                    )
                },
                {
                    id: 4,
                    title: "Primality Testing",
                    content: (
                        <>
                            <h3 className="note-subheading">Primality Testing</h3>
                            <p className="note-text">Primality testing determines whether a number is prime. Prime numbers are essential in cryptography for generating keys in encryption algorithms.</p>
                            <h4 className="note-subheading">Fermat's Little Theorem</h4>
                            <p className="note-text">If p is a prime number, and a is an integer such that 1 ≤ a ≤ p, then: a^(p-1) ≡ 1 (mod p).</p>
                            <h4 className="note-subheading">Euler's Theorem</h4>
                            <p className="note-text">Generalizing Fermat's theorem: If two numbers are coprime, then a^φ(n) ≡ 1 (mod n), where φ(n) is Euler's totient function.</p>
                            <ul className="note-list">
                                <li>RSA encryption uses large prime numbers to generate keys.</li>
                                <li>Primality tests help find suitable prime numbers for cryptographic keys.</li>
                            </ul>
                        </>
                    )
                },
                {
                    id: 5,
                    title: "Chinese Remainder Theorem",
                    content: (
                        <>
                            <h3 className="note-subheading">Chinese Remainder Theorem (CRT)</h3>
                            <p className="note-text">CRT solves systems of simultaneous congruences with different moduli. It’s used in cryptography to speed up RSA encryption and decryption.</p>
                            <h4 className="note-subheading">How CRT Works:</h4>
                            <ul className="note-list">
                                <li>CRT finds a number that satisfies multiple modular equations.</li>
                                <li>It breaks down large numbers into smaller, manageable parts.</li>
                            </ul>
                            <p className="note-example"><b>Example:</b> Solving for x in the system of equations:
                                <ul>
                                    <li>x ≡ 2 (mod 3)</li>
                                    <li>x ≡ 3 (mod 5)</li>
                                    <li>x ≡ 2 (mod 7)</li>
                                </ul>
                            </p>
                        </>
                    )
                },
                {
                    id: 6,
                    title: "Discrete Logarithms",
                    content: (
                        <>
                            <h3 className="note-subheading">Discrete Logarithms</h3>
                            <p className="note-text">The Discrete Logarithm Problem (DLP) involves finding the exponent in the equation g^x ≡ h (mod p). It’s fundamental to many cryptographic systems, such as Diffie-Hellman and ElGamal.</p>
                            <h4 className="note-subheading">Importance in Cryptography</h4>
                            <ul className="note-list">
                                <li>DLP is difficult to solve, making it useful in encryption systems.</li>
                                <li>It underpins the security of Diffie-Hellman key exchange and ElGamal encryption.</li>
                            </ul>
                            <p className="note-example"><b>Example:</b> If g = 5, p = 23, and h = 8, solving for x in the equation 5^x ≡ 8 (mod 23) is a difficult problem, ensuring secure communication.</p>
                        </>
                    )
                },
            
            ],
            videos: [
                { id: 1, title: "Introduction to Cryptography", url: "https://youtu.be/JoeiLuFNBc4?feature=shared" },
                { id: 2, title: "Number Theory Basics", url: "https://youtu.be/5PY2RvI_JnA?feature=shared" },
                { id: 3, title: "Modular Arithematic", url: "https://youtu.be/M42uDLGRSpI?feature=shared" },
            ]
        },
        // More modules...
    ];

    return (
        <>
            <Navbar />
            <MusicPlayer />
            <Chatbot />
            <div className="course-detail-page">
                <h1 className="course-detail-h1">{courseName.charAt(0).toUpperCase() + courseName.slice(1)}</h1>
                {modules.length > 0 ? (
                    <div className="notes-container">
                        {modules.map(module => (
                            <div key={module.id} className="module-card">
                                <div className="module-header" onClick={() => toggleModule(module.id)}>
                                    <h2 className="module-title">{module.title}</h2>
                                    <div className="module-tabs">
                                            <button 
                                                className={`tab-button ${activeTab[module.id] === 'notes' ? 'active' : ''}`}
                                                onClick={() => setTab(module.id, 'notes')}
                                            >
                                                Notes
                                            </button>
                                            <button 
                                                className={`tab-button ${activeTab[module.id] === 'videos' ? 'active' : ''}`}
                                                onClick={() => setTab(module.id, 'videos')}
                                            >
                                                Videos
                                            </button>
                                        </div>
                                </div>
                                {expandedModules[module.id] && (
                                    <>
                                        
                                        <div className="module-content">
                                            {activeTab[module.id] === 'notes' && (
                                                module.notes.map(note => (
                                                    <div key={note.id} className="note-card">
                                                        <h3 className="note-title">{note.title}</h3>
                                                        <div className="note-content">
                                                            {note.content}
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                            {activeTab[module.id] === 'videos' && (
                                                <div className="video-list">
                                                    {module.videos.map(video => (
                                                        <div key={video.id} className="video-item">
                                                            <a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No notes available for this course.</p>
                )}
            </div>
        </>
    );
};

export default CourseDetail;
