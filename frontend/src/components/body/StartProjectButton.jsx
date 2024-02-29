// StartProjectButton.jsx
import React, { useState } from 'react';
import './Body.css';
import NewProjectOverlay from '../overlays/NewProjectOverlay';

const StartProjectButton = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleStartProject = () => {
        setShowOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
    };

    return (
        <>
            <div className='add-new-project' onClick={handleStartProject}>
                <img className='plus-icon' src="/src/assets/icons/plus.svg" alt="plus-icon"/>
                Start New Project
            </div>
            {showOverlay && <NewProjectOverlay onClose={handleCloseOverlay} />}
        </>
    );
};

export default StartProjectButton;
