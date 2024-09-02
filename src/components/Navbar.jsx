import React, { useState } from 'react';
import darkIcon from '../assets/dark.png';
import lightIcon from '../assets/light.png';
import light from '../assets/light.png'
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-theme', !darkMode);
    };

    return (
        <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
            <div className="navbar-logo">
                <Link to='/'><h1>PrepWise
                    <img src={light} className='logo_img'></img>
                </h1>
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/courses">Courses</Link></li>
                <li><a href="#progress">My Progress</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
                <img src={darkMode ? lightIcon : darkIcon} alt="Toggle theme" />
            </button>
        </nav>
    );
};

export default Navbar;
