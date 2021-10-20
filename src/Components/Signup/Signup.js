import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import { useState } from 'react';

const Signup = () => {


    
    const {SignupWithEmail, EmailChange, PasswordChange, error,Nameupdate} = useAuth();

    return (
        <div>
            <h3>Signup From Here</h3>
            <form onSubmit={SignupWithEmail}>
                
                <input type="text" name="" id="name" placeholder="Your Name" />
                <br required onBlur={Nameupdate} />
                <input type="email" name="" id="email" placeholder="Email Address" onBlur={EmailChange} required />
                <br />
                <input type="password" name="" id="password" placeholder="Password Here" onBlur={PasswordChange} required />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p className="text-danger fw-bold">{error }</p>
            <h4>Already Have a Account ? <Link to="/login">Login From Here</Link></h4>
        </div>
    );
};

export default Signup;