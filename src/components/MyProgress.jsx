import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/MyProgress.css';

const MyProgress = ({ courses }) => {
    const [expandedSubject, setExpandedSubject] = useState(null);

    const toggleSubject = (subjectId) => {
        setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
    };

    

    return (
        <div className="my-progress-page">
            <h1>My Progress</h1>
            <div className="subject-container">
                {courses.map((course) => (
                    <div key={course.id} className="subject-card" onClick={() => toggleSubject(course.id)}>
                        <h2>{course.name}</h2>
                        {expandedSubject === course.id && (
                            <div className="module-progress">
                                {course.modules.map((module) => (
                                    <div key={module.id} className="module-card">
                                        <h3>{module.title}</h3>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-completion"
                                                style={{ width: `${module.progress}%` }}
                                            ></div>
                                        </div>
                                        <p>{module.progress}% Completed</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProgress;
