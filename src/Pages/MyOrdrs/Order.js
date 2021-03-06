import React, { useState } from 'react';
import useHooks from '../../Hooks/useHooks';

const Order = ({ order }) => {
    const { _id, planInfo, customerInfo } = order;
    const { name, location, rating, stay, price, img1 } = planInfo;
    const { customerName, email, phone, address } = customerInfo;
    const { singleOrder, setSingleOrder } = useHooks();

    const handleDelete = id => {
        const procced = window.confirm('Are you sure want to cancel this plan?');
        if (procced) {
            fetch(`https://fast-taiga-62917.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainings = singleOrder.filter(remaining => remaining._id !== id);
                        // console.log(remainings);
                        alert('Plan Canceled, Relode Now.')
                        setSingleOrder(remainings);
                    };
                });
        };
    };

    return (
        <div>
            <div className="row gx-5">
                <div className="col-12 col-md-12 col-lg-4 mt-3">
                    <img src={img1} className="img-fluid" alt="..." />
                </div>
                <div className="col-12 col-md-6 col-lg-4 order-info mt-3">
                    <h3 className="color fw-bold">{name}</h3>
                    <p>Location: <span className="fw-bold">{location}.</span></p>
                    <p>Rating: <span className="fw-bold">{rating}</span> ⭐</p>
                    <p>Stay: <span className="fw-bold">{stay}.</span></p>
                    <p>Rent: <span className="fw-bold">{price}.</span></p>
                    <br />
                    <p>Order Status: <span className="fw-bold pending">Pending</span></p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 order-info-your mt-3">
                    <h3 className="color">About You</h3>
                    <p>Name: <span className="fw-bold">{customerName}</span></p>
                    <p>Email: <span className="fw-bold">{email}</span></p>
                    <p>Contat: <span className="fw-bold">{phone}</span></p>
                    <p>Address: <span className="fw-bold">{address}</span></p>
                    <button onClick={() => { handleDelete(_id) }} className="button mt-3">Cancel This Plan</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Order;