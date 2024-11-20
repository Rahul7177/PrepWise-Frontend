import React from 'react';
import '../stylesheets/About.css';

const About = () => {
    const features = [
        {
            title: 'Personalized Learning',
            description: 'Our platform offers customized learning paths based on your progress and preferences.',
            icon: '📚'
        },
        {
            title: 'Interactive Courses',
            description: 'Engage with interactive content including quizzes, videos, and discussions to enhance your learning experience.',
            icon: '🎓'
        },
        {
            title: 'Progress Tracking',
            description: 'Monitor your learning journey with real-time progress tracking and detailed reports.',
            icon: '📊'
        },
        {
            title: 'Solve Your Doubts',
            description: 'Connect with your fellow peers and discuss your doubts. You can also use our personalised chatbot to solve your doubts.',
            icon: '👩‍🏫'
        }
    ];

    return (
        <div className="about-container" id='about'>
            <h2 className='about-title'>About Us</h2>
            <p>Welcome to PrepWise! We provide a personalized and interactive learning experience to help you achieve your academic and career goals. Here's what makes us stand out:</p>
            <div className="features">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
