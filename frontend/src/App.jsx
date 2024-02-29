import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import NewUserBody from './components/body/NewUserBody';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/newuser" element={<NewUserBody />} />
      </Routes>
    </Router>
  );
};

export default App;
