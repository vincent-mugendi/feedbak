// NewProjectOverlay.jsx
import React from 'react';
import NewProjectForm from '../forms/NewProjectForm';
import './Overlay.css'; // Import the Overlay.css file for styling

const NewProjectOverlay = ({ onClose }) => {
    return (
        <div className="overlay" onClick={onClose}>
            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <NewProjectForm />
            </div>
        </div>
    );
};

export default NewProjectOverlay;
