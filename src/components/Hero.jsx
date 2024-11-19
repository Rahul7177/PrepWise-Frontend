import React from 'react';
import '../stylesheets/Hero.css';
import heroImage from '../assets/hero.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to PrepWise</h1>
                <p>
                    PrepWise is your ultimate companion for personalized study and exam preparation.
                    Aggregating essential resources, tracking your progress, and offering tailored
                    recommendations to help you succeed.
                </p>
                <Link to={'/login'}><button className="cta-button">Get Started</button></Link>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Study illustration" />
            </div>
        </section>
    );
};

export default Hero;
