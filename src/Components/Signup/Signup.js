import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <h3>Signup From Here</h3>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder="Email Address" />
                <br />
                <input type="password" name="" id="" placeholder="Password Here" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <h4>Already Have a Account ? <Link to="/login">Login From Here</Link></h4>
        </div>
    );
};

export default Signup;