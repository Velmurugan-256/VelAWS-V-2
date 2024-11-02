// src/components/Service.js

import React from 'react';
import { motion } from 'framer-motion';
import './Service.css';

const Service = ({ title, description, level, onSelect }) => {
    return (
        <motion.div 
            className="service" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            onClick={() => onSelect(title)}
        >
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="level">Level: {level}</p>
        </motion.div>
    );
};

export default Service;
