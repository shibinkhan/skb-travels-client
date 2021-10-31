import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useHooks from '../../../../Hooks/useHooks';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';
import './ServiceDetails.css';
import axios from 'axios';

const ServiceDetails = () => {
    const [singleService, setSingleService] = useState({});

    const { user } = useAuth();
    let { serviceId } = useParams();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        reset();
        const orderInfo = {
            planInfo: singleService,
            customerInfo: data
        };
        axios.post('https://fast-taiga-62917.herokuapp.com/orders', orderInfo)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Booking Confirmed, Now Visit My Plans To See Your Booking List.');
                }
            })
    };

    useEffect(() => {
        fetch(`https://fast-taiga-62917.herokuapp.com/plans/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleService(data);
            });
    }, []);

    return (
        <div className="container mx-auto">
            {/* Details */}
            <h1 className="color my-3">{singleService?.name}</h1>
            <hr />
            <div className="row">
                <div className="service-booking-main col-12 col-sm-5 col-md-4 col-lg-3">
                    <div className="service-booking mb-4 px-3">
                        <div>
                            <div>
                                <p>Location: <span className="fw-bold">{singleService?.location}.</span></p>
                                <p>Rating: <span className="fw-bold">{singleService?.rating}</span> ⭐</p>
                                <p>Stay: <span className="fw-bold">{singleService?.stay}.</span></p>
                                <p>Rent: <span className="fw-bold">{singleService?.price}.</span></p>
                            </div>
                            <hr />

                            <h4 className="color fw-bold">About Yourself</h4>
                            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Name..." defaultValue={user?.displayName} {...register("customerName")} />
                                <br /><br />
                                <input placeholder="Email..." defaultValue={user?.email} {...register("email", { required: true })} />
                                <br /><br />
                                <input placeholder="Contact..." defaultValue="" {...register("phone", { required: true })} />
                                <br />
                                {errors.phone && <span className="text-danger">This field is required</span>}
                                <br />
                                <input placeholder="Address..." defaultValue="" {...register("address")} />
                                <br /><br />
                                <input className="button mb-2" type="submit" value="Confirm Booking" />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-7 col-md-8 col-lg-9">
                    <p className="mb-3">{singleService?.description1}</p>
                    <img src={singleService?.img1} alt="" className="mx-auto container img-fluid px-0" />
                    <p className="mt-5 mb-3">{singleService?.description1}</p>
                    <img src={singleService?.img2} alt="" className="mx-auto container img-fluid px-0" />
                    <p className="mt-5 mb-3">{singleService?.description3}</p>
                    <img src={singleService?.img3} alt="" className="mx-auto container img-fluid px-0" />
                    <p className="mt-5">{singleService?.description4}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;