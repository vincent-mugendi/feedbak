import React from "react";
import LogInForm from "../forms/LogInForm";
import './LogIn.css';
import Header from "../header/Header";


const LogIn = () => {
    return (
        <div className="sign-up-page">
            <Header />
            <LogInForm />
            <p className="login"><a href="#">or Login</a></p>
        </div>    
        );
}

export default LogIn;