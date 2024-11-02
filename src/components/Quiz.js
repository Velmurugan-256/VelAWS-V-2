// src/components/Quiz.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Quiz.css'; // Ensure you create this CSS file for styling

const quizData = {
    'AWS Certified Solutions Architect': [
        {
            question: 'What is the primary benefit of using Amazon EC2?',
            options: [
                'A) Cost-Effectiveness',
                'B) Scalability',
                'C) Security',
                'D) All of the above',
            ],
            answer: 'D) All of the above',
        },
        {
            question: 'What is the default behavior of an EC2 instance if it fails?',
            options: [
                'A) It stops',
                'B) It terminates',
                'C) It reboots',
                'D) It does nothing',
            ],
            answer: 'C) It reboots',
        },
        {
            question: 'Which service is best for load balancing?',
            options: [
                'A) Amazon EC2',
                'B) Amazon S3',
                'C) Elastic Load Balancing',
                'D) AWS Lambda',
            ],
            answer: 'C) Elastic Load Balancing',
        },
    ],
    'AWS Certified Developer': [
        {
            question: 'What does AWS SDK stand for?',
            options: [
                'A) Software Development Kit',
                'B) Simple Development Kit',
                'C) Secure Development Kit',
                'D) Standard Development Kit',
            ],
            answer: 'A) Software Development Kit',
        },
        {
            question: 'Which service can be used for serverless application deployment?',
            options: [
                'A) Amazon EC2',
                'B) AWS Elastic Beanstalk',
                'C) AWS Lambda',
                'D) Amazon RDS',
            ],
            answer: 'C) AWS Lambda',
        },
    ],
    'AWS Certified SysOps Administrator': [
        {
            question: 'Which AWS service is used for monitoring your resources?',
            options: [
                'A) Amazon CloudWatch',
                'B) AWS CloudTrail',
                'C) AWS Config',
                'D) Amazon Inspector',
            ],
            answer: 'A) Amazon CloudWatch',
        },
        {
            question: 'What does the AWS CLI stand for?',
            options: [
                'A) Amazon Web Services Command Line Interface',
                'B) Amazon Web Services Command Level Interface',
                'C) Amazon Web Services Console Line Interface',
                'D) None of the above',
            ],
            answer: 'A) Amazon Web Services Command Line Interface',
        },
    ],
    'AWS Certified Cloud Practitioner': [
        {
            question: 'What is AWS?',
            options: [
                'A) A type of hardware',
                'B) A programming language',
                'C) A cloud services platform',
                'D) A web browser',
            ],
            answer: 'C) A cloud services platform',
        },
        {
            question: 'What is the AWS Free Tier?',
            options: [
                'A) A limited subscription plan',
                'B) A program offering free resources for a year',
                'C) A type of server',
                'D) An interface for management',
            ],
            answer: 'B) A program offering free resources for a year',
        },
    ],
    'AWS Certified DevOps Engineer': [
        {
            question: 'Which AWS service is used for CI/CD?',
            options: [
                'A) AWS CodeDeploy',
                'B) AWS CloudFormation',
                'C) AWS Lambda',
                'D) Amazon S3',
            ],
            answer: 'A) AWS CodeDeploy',
        },
        {
            question: 'What is AWS CloudFormation used for?',
            options: [
                'A) Monitoring resources',
                'B) Managing user permissions',
                'C) Infrastructure as code',
                'D) None of the above',
            ],
            answer: 'C) Infrastructure as code',
        },
    ],
    'Amazon EC2': [
        {
            question: 'What is the main purpose of Amazon EC2?',
            options: [
                'A) Data storage',
                'B) Compute capacity in the cloud',
                'C) Networking',
                'D) Security management',
            ],
            answer: 'B) Compute capacity in the cloud',
        },
        {
            question: 'What type of instances can you run with EC2?',
            options: [
                'A) Only Windows',
                'B) Only Linux',
                'C) Both Windows and Linux',
                'D) None of the above',
            ],
            answer: 'C) Both Windows and Linux',
        },
    ],
    'Amazon S3': [
        {
            question: 'Which storage class is intended for data that is accessed less frequently?',
            options: [
                'A) S3 Standard',
                'B) S3 Intelligent-Tiering',
                'C) S3 Standard-IA',
                'D) S3 Glacier',
            ],
            answer: 'C) S3 Standard-IA',
        },
        {
            question: 'What is the maximum size of a single S3 object?',
            options: [
                'A) 5GB',
                'B) 50GB',
                'C) 5TB',
                'D) 1TB',
            ],
            answer: 'C) 5TB',
        },
    ],
    'Amazon RDS': [
        {
            question: 'Which database engines are supported by Amazon RDS?',
            options: [
                'A) MySQL',
                'B) PostgreSQL',
                'C) SQL Server',
                'D) All of the above',
            ],
            answer: 'D) All of the above',
        },
        {
            question: 'What is the benefit of using Amazon RDS?',
            options: [
                'A) Scalability',
                'B) Automated backups',
                'C) High availability',
                'D) All of the above',
            ],
            answer: 'D) All of the above',
        },
    ],
    'AWS Lambda': [
        {
            question: 'What is AWS Lambda primarily used for?',
            options: [
                'A) Running virtual machines',
                'B) Serverless computing',
                'C) Storage solutions',
                'D) Data analysis',
            ],
            answer: 'B) Serverless computing',
        },
        {
            question: 'What triggers an AWS Lambda function?',
            options: [
                'A) Only HTTP requests',
                'B) Events from other AWS services',
                'C) Scheduled events only',
                'D) None of the above',
            ],
            answer: 'B) Events from other AWS services',
        },
    ],
    'Amazon DynamoDB': [
        {
            question: 'What type of database is DynamoDB?',
            options: [
                'A) Relational',
                'B) Document',
                'C) Key-value',
                'D) Both B and C',
            ],
            answer: 'D) Both B and C',
        },
        {
            question: 'What is the maximum item size in DynamoDB?',
            options: [
                'A) 400KB',
                'B) 1MB',
                'C) 256KB',
                'D) 10MB',
            ],
            answer: 'A) 400KB',
        },
    ],
};

const Quiz = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const questions = quizData[title] || [];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(null);
    const [timer, setTimer] = useState(60); // 60 seconds timer

    useEffect(() => {
        if (timer > 0) {
            const timerId = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timerId);
        } else {
            alert('Time is up!');
            handleSubmit();
        }
    }, [timer]);

    const handleAnswerSelect = (option) => {
        setSelectedAnswer(option);
    };

    const handleNextQuestion = () => {
        setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
        setSelectedAnswer(''); // Reset the selected answer for the next question
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestion((prev) => Math.max(prev - 1, 0));
        setSelectedAnswer(''); // Reset the selected answer for the previous question
    };

    const handleSubmit = () => {
        const correctAnswers = questions.filter(q => q.answer === selectedAnswer).length;
        const totalQuestions = questions.length;
        const scorePercentage = (correctAnswers / totalQuestions) * 100;
        setScore(scorePercentage);
    };

    const handleRetry = () => {
        setCurrentQuestion(0);
        setSelectedAnswer('');
        setScore(null);
        setTimer(60);
    };

    if (score !== null) {
        return (
            <div className="scoreboard">
                <h2>Score Board</h2>
                <h3>Your Score: {score.toFixed(2)}%</h3>
                <p>
                    {score < 50 && "Result: Low"}
                    {score >= 50 && score < 70 && "Result: Average"}
                    {score >= 70 && score < 80 && "Result: Good"}
                    {score >= 80 && "Result: Very Good"}
                </p>
                <button onClick={handleRetry}>Retry Quiz</button>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <h2 className="quiz-title">{title} Quiz</h2>
            <div className="timer">
                <h4>Question {currentQuestion + 1} of {questions.length} /Time Left: {timer}s</h4>
            </div>           
            {questions.length > 0 && currentQuestion < questions.length ? (
                <div className="question-container">
                    <p>{questions[currentQuestion].question}</p>
                    <div className="options-container">
                        {questions[currentQuestion].options.map((option, index) => (
                            <div key={index} className="option">
                                <input
                                    type="radio"
                                    id={`option-${index}`}
                                    name="quiz-option"
                                    value={option}
                                    checked={selectedAnswer === option}
                                    onChange={() => handleAnswerSelect(option)}
                                />
                                <label htmlFor={`option-${index}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                    <div className="button-group">
                        {currentQuestion > 0 && (
                            <button onClick={handlePreviousQuestion}>Previous</button>
                        )}
                        {currentQuestion < questions.length - 1 ? (
                            <button onClick={handleNextQuestion}>Next</button>
                        ) : (
                            <button onClick={handleSubmit}>Submit</button>
                        )}
                    </div>
                </div>
            ) : (
                <p>No questions available.</p>
            )}
        </div>
    );
};

export default Quiz;