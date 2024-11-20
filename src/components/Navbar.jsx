import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import '../stylesheets/Navbar.css';
import { auth } from '../firebase';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentUser } = useAuth();

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const handleLogout = async () => {
        await auth.signOut();
        closeDropdown();
        alert("Logged Out Successfully!");
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <h1>
                        PrepWise
                        <img
                            src={require('../assets/light.png')}
                            alt="Logo"
                            className="logo_img"
                        />
                    </h1>
                </Link>
            </div>
            
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
                <li><Link to="/courses">Courses</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><Link to="/forum">Forum</Link></li> {/* Added Forum Link */}
                <li>
                    <div className="user-dropdown">
                        <button className="user-icon" onClick={toggleDropdown}>
                            Account
                        </button>
                        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                            {currentUser ? (
                                <>
                                    <Link to="/account" onClick={closeDropdown}>My Account</Link>
                                    <Link to="/progress" onClick={closeDropdown}>My Progress</Link>
                                    <button onClick={handleLogout}>Logout</button>
                                </>
                            ) : (
                                <Link to="/login" onClick={closeDropdown}>Login</Link>
                            )}
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
