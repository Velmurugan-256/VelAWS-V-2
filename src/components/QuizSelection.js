// src/components/QuizSelection.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from './Service'; // Ensure this component is correctly implemented
import './QuizSelection.css'; // Update styles as needed

const certificationsData = [
    {
        title: 'AWS Certified Solutions Architect',
        description: 'Test your knowledge on architecture and design on AWS.',
        level: 'Professional',
    },
    {
        title: 'AWS Certified Developer',
        description: 'Assess your skills in developing and maintaining applications on AWS.',
        level: 'Associate',
    },
    {
        title: 'AWS Certified SysOps Administrator',
        description: 'Challenge your knowledge in operational roles on AWS.',
        level: 'Associate',
    },
    {
        title: 'AWS Certified Cloud Practitioner',
        description: 'Get started with AWS cloud basics and foundational services.',
        level: 'Foundational',
    },
    {
        title: 'AWS Certified DevOps Engineer',
        description: 'Evaluate your expertise in DevOps practices on AWS.',
        level: 'Professional',
    },
];

const servicesData = [
    {
        title: 'Amazon EC2',
        description: 'Scalable virtual servers in the cloud for computing.',
        level: 'Compute',
    },
    {
        title: 'Amazon S3',
        description: 'Object storage built to store and retrieve any amount of data.',
        level: 'Storage',
    },
    {
        title: 'Amazon RDS',
        description: 'Managed relational database service for various database engines.',
        level: 'Database',
    },
    {
        title: 'AWS Lambda',
        description: 'Run code without provisioning or managing servers.',
        level: 'Compute',
    },
    {
        title: 'Amazon DynamoDB',
        description: 'Fully managed NoSQL database service.',
        level: 'Database',
    },
];

const QuizSelection = () => {
    const [selection, setSelection] = useState(null);
    const navigate = useNavigate();

    const handleChoice = (choice) => {
        setSelection(choice);
    };

    const handleSelect = (item) => {
        // Navigate to the detail page for certifications or services
        navigate(`/certification/${item.title}`); // For certifications
        // You can create a similar service detail page if needed
    };

    return (
        <div className="quiz-selection-container">
            <h2>Select Your Quiz Type</h2>
            {!selection ? (
                <div className="choices">
                    <button onClick={() => handleChoice('mockExam')}>
                        Are you ready for Mock Exam?
                    </button>
                    <button onClick={() => handleChoice('trainingQuiz')}>
                        Looking for Training Quiz at Service Level?
                    </button>
                </div>
            ) : (
                <div>
                    {selection === 'mockExam' ? (
                        <div>
                            <h3>AWS Certifications</h3>
                            <div className="services-list">
                                {certificationsData.map((certification, index) => (
                                    <Service 
                                        key={index} 
                                        title={certification.title} 
                                        description={certification.description} 
                                        level={certification.level} 
                                        onSelect={() => handleSelect(certification)} 
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3>AWS Services</h3>
                            <div className="services-list">
                                {servicesData.map((service, index) => (
                                    <Service 
                                        key={index} 
                                        title={service.title} 
                                        description={service.description} 
                                        level={service.level} 
                                        onSelect={() => handleSelect(service)} 
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    <button onClick={() => setSelection(null)}>Back to Choices</button>
                </div>
            )}
        </div>
    );
};

export default QuizSelection;
