import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Service = ({ service }) => {
    const { _id, img1, name, location, rating, stay, price, description1 } = service;
    
    return (
        <div className="col">
            <div className="card-body-custom card h-100">
                <img src={img1} className="service-img card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="color fw-bold card-title">{name}</h3>
                    <p>Location: <span className="fw-bold">{location}.</span></p>
                    <p>Rating: <span className="fw-bold">{rating}</span> ⭐</p>
                    <p>Stay: <span className="fw-bold">{stay}.</span></p>
                    <p>Rent: <span className="fw-bold">{price}.</span></p>
                    <p>{description1}</p>
                </div>
                <Link to={`/plans/${_id}`}><button className="button mb-5 px-5">Procced to Booking</button></Link>
            </div>
        </div>
    );
};

export default Service;