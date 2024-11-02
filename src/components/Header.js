// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './userContext'; // Import the user context
import './Header.css';
import awsLogo from '../assets/aws-logo.png';

const Header = () => {
    const { user } = useUser(); // Get user state from context
    return (
        <header className="header">
            <div className="header-left">
                <img src={awsLogo} alt="AWS Logo" className="aws-logo" />
                <h1>AWS Inspired Quiz</h1>
            </div>
            <nav className="header-right">
                <Link to="/aboutUs">About Us</Link>
                <Link to="/contactUs">Contact Us</Link>
                <Link to="/supportUs">Support Us</Link>
                {user ? (
                    <span>Welcome {user.username}</span> // Display welcome message if user is signed in
                ) : (
                    <Link to="/signin">Sign In</Link>
                )}
               
               
            </nav>
        </header>
    );
};

export default Header;
