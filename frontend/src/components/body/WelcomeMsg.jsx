import React from 'react';
import { useLocation } from 'react-router-dom';
import './Body.css'

const WelcomeMessage = () => {
  const location = useLocation();
  const firstName = location.state?.firstName;

  return (
    <div  className='welcome-msg'>
      <p>-------------- Welcome to Feedbak, {firstName}!</p>
      {/* Other content of NewUserBody */}
    </div>
  );
};

export default WelcomeMessage;
