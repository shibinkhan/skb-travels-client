import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-md navbar-light nav-bar-btn py-0">
                <div className="main-navbar  container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand py-0" to="/home">SKB Travels.</Link>

                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Navlinks */}
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                                {user?.email &&
                                    <div>
                                        <NavLink className="nav-link" to="/myplans">My Plans</NavLink>
                                    </div>
                                }
                                {user?.email &&
                                    <div>
                                        {/* Navbar Dropdown */}
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin Panel</a>
                                            <div className="dropdown-menu nav-bar-dropdown" aria-labelledby="navbarDropdown">
                                                <NavLink className="nav-link" to="/manageallorders">Manage All Booking</NavLink>
                                                <NavLink className="nav-link" to="/addanewservice">Add A New Plan</NavLink>
                                            </div>
                                        </li>
                                    </div>
                                }
                                <NavLink className="nav-link" to="/about">About Us</NavLink>  
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <div>
                            {user?.email &&
                                <div className="d-flex">
                                    <p className="my-auto user-name">{user.displayName}</p>
                                    <img className="user-img mx-2" src={user.photoURL} alt="" />
                                </div>
                            }
                        </div>

                        {/* sign in and out */}
                        <div>
                            {user?.email ?
                                <button className="button" onClick={logOut}>Sign Out</button> :
                                <Link to="/signin"><button className="button">SIGN IN</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;