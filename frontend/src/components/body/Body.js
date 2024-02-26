// Body.js
import React from 'react';
import WelcomeMsg from './WelcomeMessage';
import StartProjectButton from './StartProjectButton';

const Body = () => {
    return (
        <div className="body">
            <WelcomeMsg />
            <StartProjectButton />
        </div>
    );
};

export default Body;