import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../stylesheets/CourseCard.css';

const CourseCard = ({ name, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/course/${name.toLowerCase()}`); 
    };

    return (
        <div className="course-card-container" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="course-card" style={{ backgroundImage: `url(${image})` }}>
                <div className="card-overlay">
                    <h2 className='card-overlay-title'>{name}</h2>
                </div>
            </div>
            <div className="course-title">
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default CourseCard;
