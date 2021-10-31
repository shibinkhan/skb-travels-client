import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './SignIn.css';

const Login = () => {
    const { googleSignIn, handleSignIn, handleEmailInput, handlePasswordInput, error, setUser, setIsloading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        googleSignIn()
        .then((result) => {
            // console.log(result.user);
            setUser(result.user);
            history.push(redirect_uri);
        })
        .finally(() => {
            setIsloading(false);
        });
    }

    return (
        <div className="signinBody">
            <div className="signin-main mx-auto pt-5 mt-5">
                <h1 className="login-title">Sign In</h1>
                <form onSubmit={handleSignIn}>
                    {/* user input fields */}
                    <input className="input-field" onBlur={handleEmailInput} type="email" placeholder="Email..." required /><br />
                    <input className="input-field" onBlur={handlePasswordInput} type="password" placeholder="Password..." required /><br /><br />
                    <div className="text-danger">{error}</div>
                    <button className="button">Sign In</button><br />
                </form><br />
                <p>Don't have account? <NavLink className="toggle" to="/resister">Create Now</NavLink></p>
                <p>Or</p>
                <button className="button" onClick={handleGoogleLogIn}>Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;