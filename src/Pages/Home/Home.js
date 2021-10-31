import React from 'react';
import Section1 from './Section1/Section1';
import Facility from './Section2/Section2';
import Services from './Services/Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <Services />
            <Section1 />
            <Facility />
        </div>
    );
};

export default Home;