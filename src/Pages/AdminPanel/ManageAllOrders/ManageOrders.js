import React, { useState } from 'react';
import useHooks from '../../../Hooks/useHooks';
import './ManageAllOrders.css';

const ManageOrders = ({order}) => {
    const { _id, planInfo, customerInfo } = order;
    const { singleOrder, setSingleOrder } = useHooks();
    const { name, location, rating, stay, price, img1 } = planInfo;
    const { customerName, email, phone, address } = customerInfo;

    const handleDeleteMO = id => {
        const procced = window.confirm('Are you sure want to cancel this plan?');
        if (procced) {
            fetch(`https://fast-taiga-62917.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        const remainingPlans = singleOrder.filter(remaining => remaining._id !== id);
                        setSingleOrder(remainingPlans);
                        alert('Plan Canceled.')
                    };
                });
        };
    };
    
    const [pending, setPending] = useState('');
    const handlePending = () => {
        setPending(true);
    };

    return (
        <div >
            <div className="row gx-5">
                <div className="col-12 col-md-12 col-lg-4">
                    <img src={img1} className="img-fluid" alt="..." />
                </div>
                <div className="col-12 col-md-6 col-lg-4 order-info MT-3">
                    <h3 className="color fw-bold">{name}</h3>
                    <p>Location: <span className="fw-bold">{location}.</span></p>
                    <p>Rating: <span className="fw-bold">{rating}</span> ⭐</p>
                    <p>Stay: <span className="fw-bold">{stay}.</span></p>
                    <p>Rent: <span className="fw-bold">{price}.</span></p>
                    <br />
                    <p>Order Status: <span className={!pending ? 'pending fw-bold' : 'fw-bold text-success aproved'}>{!pending ? 'Pending' : 'Aproved'}</span></p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 order-info-your MT-3">
                    <h3 className="color">About Customer</h3>
                    <p>Name: <span className="fw-bold">{customerName}</span></p>
                    <p>Email: <span className="fw-bold">{email}</span></p>
                    <p>Contat: <span className="fw-bold">{phone}</span></p>
                    <p>Address: <span className="fw-bold">{address}</span></p>
                    <button onClick={handlePending} className="button my-3 me-2">Aprove This Plan</button>
                    <button onClick={() => { handleDeleteMO(_id) }} className="button">Delete This Plan</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default ManageOrders;