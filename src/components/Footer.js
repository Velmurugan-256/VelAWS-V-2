// src/components/Footer.js

import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 AWS Inspired. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={24} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
