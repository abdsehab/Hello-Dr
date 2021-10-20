import React from 'react';
import { Link } from 'react-router-dom';

import useAuth from './../../Hooks/useAuth';

const Login = () => {
    function refreshPage() {
    window.location.reload(false);
  }

    const { GoogleSignin, EmailLogin ,EmailChange,PasswordChange, error} = useAuth();

    return (
        <div>
            <h3>login</h3>
            <form onSubmit={EmailLogin}>
                <input type="email" name="" id="" placeholder="your email here" onBlur={EmailChange} />
                <br />
                <input type="password" name="" id="" placeholder="Your password Here" onBlur={PasswordChange}/>
                <br />
                <input type="submit" value="submit" />
            </form>
            <h6>New User ? <Link to="/signup">Create Account</Link></h6>
            <p>{error}</p>
            <div>
                -------------or----------
            </div>
            <button className="btn-regular" onClick={GoogleSignin}>Google</button>
        </div>
    );
};

export default Login;