import React from 'react';
import { Link } from 'react-router-dom';

import useAuth from './../../Hooks/useAuth';

const Login = () => {
    function refreshPage() {
    window.location.reload(false);
  }

    const { GoogleSignin } = useAuth();

    return (
        <div>
            <h3>login</h3>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder="your email here" />
                <br />
                <input type="password" name="" id="" placeholder="Your password Here" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <h6>New User ? <Link to="/signup">Create Account</Link></h6>
            <div>
                -------------or----------
            </div>
            <button className="btn-regular" onClick={GoogleSignin}>Google</button>
        </div>
    );
};

export default Login;