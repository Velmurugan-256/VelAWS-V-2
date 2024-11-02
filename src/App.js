// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/userContext'; // Import the UserProvider
import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';
import SignIn from './components/SignIn'; // Import SignIn component
import SignUp from './components/SignUp'; // Import SignUp component
import QuizSelection from './components/QuizSelection'; // Import QuizSelection component
import Quiz from './components/Quiz'; // Import Quiz component
import CertificationDetail from './components/CertificationDetail'; // Import CertificationDetail component

const App = () => {
    return (
     <UserProvider> {/* Ensure this is wrapping your Router */}
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Services />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/quiz-selection" element={<QuizSelection />} />
                <Route path="/quiz/:title" element={<Quiz />} />
                <Route path="/certification/:title" element={<CertificationDetail />} /> {/* Certification detail route */}
            </Routes>
            <Footer />
        </Router>
       </UserProvider>
    );
};

export default App;
