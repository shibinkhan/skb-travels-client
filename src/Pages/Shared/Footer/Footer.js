import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="footer-container mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-start">
                                <h1>SKB Travels</h1>
                                <p><small>Why Do People Travel? ... We all have our reasons for traveling: wanderlust, the love of a different culture, a desire to just leave it all behind, the need to forget, or a want to meet new people. Travel becomes a way for people to deal with different situations, experience new things, or help search for a sense of self.</small></p>
                            </div>
                        </div>

                        <div className="col-md-6 my-auto">
                            <div>
                                <h3 className="mb-4">Sign Up For The Newsletter</h3>
                                <div className="input-group">
                                    <input type="text" className="form-control me-2" placeholder="Insert Your Email Here..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button className="button" type="button">Send Email</button>
                                </div>
                            </div>

                            <ul className="ps-0 d-flex justify-content-center mt-3">
                                <NavLink to="/home" className="text-dark nav-link">Home</NavLink>
                                <NavLink to="/about" className="text-dark nav-link">About us</NavLink>
                            </ul>
                        </div>
                    </div>
                    <p className="mb-0 py-4">All © Copyright Reserved by SKB Travels 2021.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;