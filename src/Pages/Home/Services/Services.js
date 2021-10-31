import React from 'react';
import useHooks from '../../../Hooks/useHooks';
import Service from './Service';
import './Services.css';

const Services = () => {
    const { services } = useHooks();
    
    return (
        <div className="container pb-4">
            <h1 className="color pt-3 mt-5 mb-3 fw-bold">Choose Your Desire Spot</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;