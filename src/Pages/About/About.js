import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import image from '../../Images/55519486a.jpg';



const About = () => {
    return (
        <div className="about-main container">
            {/* About Us */}
            <div className="aboutUs-main row d-flex align-items-center justify-content-around">
                <div className="col-lg-6">
                    <img src={image} alt="" className="about-img my-5 img-fluid" />
                </div>

                <div className="aboutUs col-lg-5 text">
                    <h1 className="about-title color fw-bold">About Us</h1>
                    <p>SKB Travels, For over 55 years, EF has been working to keep minds and the world wide open. We design tours to help educators teach, and so students can learn more about tolerance, other perspectives, and themselves......</p>
                    <Link to="/">
                        <button className="read-more mb-4">Read More</button>
                    </Link>
                </div>
            </div>

            {/* What We Offer */}
            <div className="privacyMain py-3 mb-3">
                <div className="mx-auto privacy">
                    <h4 className="color fw-bold">What We Offer?</h4>
                    <p>For over 55 years, EF has been working to keep minds and the world wide open. We design tours to help educators teach, and so students can learn more—about tolerance, other perspectives, and themselves. Our company’s roots are in language learning and cultural exchange, and over time, EF’s mission to provide immersive, life-changing education has remained the same.</p>
                    <p>By putting people at the center of everything we do, the team at EF Educational Tours makes understanding come alive for our customers. Because a meaningful travel experience starts with whoever’s showing you the way forward. Anyone can take you someplace new. We’ll take the time to help you understand it. Here at EF, learning comes first, and our time-tested approach to student travel reflects that.</p>
                </div>
            </div>

            {/* privacy Policy */}
            <div className="privacyMain py-3">
                <div className="mx-auto privacy">
                    <h4 className="color fw-bold">Our Privacy policy</h4>
                    <p>Take a minute and read the site's Privacy Policy, as well as the Kids' Privacy Policy for additional information. There is a link to the company's privacy policy on the catalog request page, so you can review exactly how your personal information will be used before sending in your request.<br /><br /> It's important to read their Privacy Policy before you submit personal information. Spend some time looking around the site and check the privacy policy before you jump in. It's free to join the Parker's online website, and their privacy policy promises you won't receive unwanted emails.</p>
                </div>
            </div>
        </div>
    );
};

export default About;