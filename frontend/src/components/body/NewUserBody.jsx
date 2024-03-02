// Body.js
import React from 'react';
import WelcomeMessage from './WelcomeMsg';
import StartProjectButton from './StartProjectButton';
import Header from '/src/components/header/Header';

import './Body.css'

const NewUserBody = () => {
    return (
        <>
            <Header />
            <div className="body">
                <WelcomeMessage />
                <StartProjectButton />
            </div>
        </>
    );
};

export default NewUserBody;
