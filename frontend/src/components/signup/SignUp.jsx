import React from "react";
import SignUpForm from "../forms/SignUpForm";
import './SignUp.css';
import Header from "../header/Header";


const SignUp = () => {
    return (
        <div className="sign-up-page">
            <Header />
            <SignUpForm />
            <p className="login"><a href="#">or Login</a></p>
        </div>    
        );
}

export default SignUp;