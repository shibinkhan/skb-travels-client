import React from 'react';
import { Link } from 'react-router-dom';
import imagekuakata from '../../../Images/Kuakata-Sea-Beach.jpg';
import imagerangamati from '../../../Images/rangamati-hanging-bridge.jpg';
import './Section1.css';

const Section1 = () => {
    return (
        <div>
            <div className="container my-5 pb-4">
                {/* Corona Vaccine */}
                <h1 className="color mt-5 mb-3 fw-bold">Get a Free Tour To</h1>
                <div className=" row d-flex align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <img src={imagekuakata} alt="" className="img-fluid" />
                    </div>

                    <div className="aboutUs col-lg-6 text-end">
                        <h1 className="corona">KuaKata</h1>
                        <p>Kuakata, the daughter of the sea, the green land of unparalleled beauty, Located in Patuakhali district. Kuakata is the only beach in South Asia where you can stand and watch the sunrise and sunset. Undoubtedly, it is a great thing to observe the rising of the sun through the belly of the sea and the disappearance of the sun in the middle of the sea.</p>
                        <Link to="/myplans">
                            <button className="read-more mb-5 mb-lg-0">Apply</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container my-5 pb-4">
                {/* Corona Vaccine */}
                <div className=" row d-flex align-items-center justify-content-between">
                    <div className="aboutUs col-lg-6">
                        <h1 className="corona">RangaMati</h1>
                        <p>Kuakata, the daughter of the sea, the green land of unparalleled beauty, Located in Patuakhali district. Kuakata is the only beach in South Asia where you can stand and watch the sunrise and sunset. Undoubtedly, it is a great thing to observe the rising of the sun through the belly of the sea and the disappearance of the sun in the middle of the sea.</p>
                        <Link to="/myplans">
                            <button className="read-more mb-5 mb-lg-0">Apply</button>
                        </Link>
                    </div>

                    <div className="col-lg-6">
                        <img src={imagerangamati} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;