// src/components/SignUp.js

import React from 'react';
import './SignUp.css';

const SignUp = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add signup logic here
        alert("Sign Up logic to be implemented!");
    };

    return (
        <div className="signup-container">
            <div className="signup-header">
                <h2>Create Your AWS Account</h2>
            </div>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" required />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <div className="signup-footer">
                <p>Already have an account? <a href="/signin">Sign In</a></p>
            </div>
        </div>
    );
};

export default SignUp;
