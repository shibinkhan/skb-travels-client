import React from 'react';
import "./Section2.css";
import customer from '../../../Images/customer (1).jpg';
import customer2 from '../../../Images/customer (2).jpg';
import customer3 from '../../../Images/customer (3).jpg';
import customer4 from '../../../Images/customer (4).jpg';

const Facility = () => {
    return (
        <div className="container">
            <section class="container">
                <h2 class="text-center fw-bold mt-5 pb-3 color">Customer's Review</h2>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div class="col">
                        <div class="card h-100 bg-color-custom py-5">
                            <img src={customer2} class="card-img-top w-50 mx-auto mb-4 rounded-circle" alt="..." />
                            <div class ="card-body text-center p-4 pb-0">
                                <p class ="fs-5 rating-color">
                                <i class ="fas fa-star"></i>
                                <i class ="fas fa-star"></i>
                                <i class ="fas fa-star"></i>
                                <i class ="fas fa-star"></i>
                                <i class ="far fa-star"></i>
                                </p>
                                <h5 class ="card-title my-4 text-primary">Syed Motin</h5>
                                <p class="card-text">Lisa & the team were very fast and efficient in responding to any emails and also with updating me with my travel itinerary, etc. Loved being able yo book everything in the one place!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-color-custom py-5">
                            <img src={customer3} class="card-img-top w-50 mx-auto mb-4 rounded-circle" alt="..." />
                            <div class ="card-body text-center p-4 pb-0">
                                <p class ="fs-5 rating-color">
                                <i class ="fas fa-star"></i>
                                <i class ="fas fa-star"></i>
                                <i class ="fas fa-star"></i>
                                <i class ="far fa-star"></i>
                                <i class ="far fa-star"></i>
                                </p>
                                <h5 class="card-title my-4 text-primary">Lisan Islam</h5>
                                <p class="card-text">Our booking was very easy to do online, I needed to make a few changes that I felt was not handled well at all. Once I spoke to the Team Manager, he was absolutely amazing.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 py-5 bg-color-custom">
                            <img src={customer4} class="card-img-top w-50 mx-auto mb-4 rounded-circle" alt="..." />
                            <div class ="card-body text-center p-4 pb-0">
                                <p class ="fs-5 rating-color">
                                <i class ="fas fa-star"></i>
                                <i class ="fas fa-star"></i>
                                <i class ="fas fa-star"></i>
                                <i class ="fas fa-star"></i>
                                <i class ="far fa-star"></i>
                                </p>
                                <h5 class="card-title my-4 text-primary">AK Laveen</h5>
                                <p class="card-text">I have not used your business or travel on line before so a bit panicky. But booking confirmed, informative emails, and a fantastic bargain stay at the Crown Metropol Perth.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-color-custom py-5">
                            <img src={customer} class="card-img-top w-50 mx-auto mb-4 rounded-circle" alt="..." />
                            <div class ="card-body text-center p-4 pb-0">
                                <p class ="fs-5 rating-color">
                                <i class ="fas fa-star"></i>
                                <i class ="fas fa-star"></i>
                                <i class ="fas fa-star"></i>
                                <i class ="far fa-star"></i>
                                <i class ="far fa-star"></i>
                                </p>
                                <h5 class ="card-title my-4 text-primary">Rashed X</h5>
                                <p class="card-text">We had a fantastic time on Hayman Island and it was so easy to book this holiday with TravelOnline. It was also cheaper than other quotes I had for the same holiday.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facility;