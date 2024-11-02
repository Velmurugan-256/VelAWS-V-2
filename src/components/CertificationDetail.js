// src/components/CertificationDetail.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const certificationData = {
    'AWS Certified Solutions Architect': {
        syllabus: 'Architecture principles, services, and best practices.',
        examPattern: 'Multiple choice and multiple answer.',
        timing: '130 minutes.',
    },
    'AWS Certified Developer': {
        syllabus: 'Development, deployment, and debugging on AWS.',
        examPattern: 'Multiple choice and multiple answer.',
        timing: '130 minutes.',
    },
    'AWS Certified SysOps Administrator': {
        syllabus: 'Management and operations on AWS.',
        examPattern: 'Multiple choice and multiple answer.',
        timing: '130 minutes.',
    },
    'AWS Certified Cloud Practitioner': {
        syllabus: 'Basic concepts of AWS and cloud technologies.',
        examPattern: 'Multiple choice and multiple answer.',
        timing: '90 minutes.',
    },
    'AWS Certified DevOps Engineer': {
        syllabus: 'Continuous delivery and automation on AWS.',
        examPattern: 'Multiple choice and multiple answer.',
        timing: '180 minutes.',
    },
};

const CertificationDetail = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const details = certificationData[title];

    const handleStartQuiz = () => {
        navigate(`/quiz/${title}`);
    };

    return (
        <div className="certification-detail-container">
            <h2>{title} Details</h2>
            {details ? (
                <div>
                    <h3>Syllabus</h3>
                    <p>{details.syllabus}</p>
                    <h3>Exam Pattern</h3>
                    <p>{details.examPattern}</p>
                    <h3>Timing</h3>
                    <p>{details.timing}</p>
                    <button onClick={handleStartQuiz}>Start Quiz</button>
                </div>
            ) : (
                <p>No details available for this certification.</p>
            )}
        </div>
    );
};

export default CertificationDetail;
