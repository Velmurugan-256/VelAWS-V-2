import React, { useState } from 'react';
import { useUser } from './userContext'; // Import user context
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = event.target.email.value;
        const password = event.target.password.value;

        // Basic logic to accept any user ID and password
        if (userId && password) {
            // Redirect to the quiz selection page
            navigate('/quiz-selection');
        } else {
            alert("Please enter valid credentials!");
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-header">
                <h2>Sign In to Your AWS Account</h2>
            </div>
            <form onSubmit={handleSubmit} className="signin-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit" className="signin-button">Sign In</button>
            </form>
            <div className="signin-footer">
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </div>
    );
};

export default SignIn;
