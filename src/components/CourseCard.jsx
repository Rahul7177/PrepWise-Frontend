// src/components/CourseCard.js
import React from 'react';
import '../stylesheets/CourseCard.css';

const CourseCard = ({ name, image }) => {
    return (
        <div className="course-card-container">
            <div className="course-card" style={{ backgroundImage: `url(${image})` }}>
                <div className="course-overlay">
                    <h2>{name}</h2>
                </div>
            </div>
            <div className="course-title">
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default CourseCard;
