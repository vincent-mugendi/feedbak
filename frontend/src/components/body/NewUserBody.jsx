// Body.js
import React from 'react';
import WelcomeMessage from './WelcomeMsg';
import StartProjectButton from './StartProjectButton';

import './Body.css'

const NewUserBody = () => {
    return (
        <div className="body">
            <WelcomeMessage />
            <StartProjectButton />
        </div>
    );
};

export default NewUserBody;