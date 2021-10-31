import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useHooks from '../../Hooks/useHooks';
import './MyOrdrs.css';
import Order from './Order';

const MyOrdrs = () => {
    const { singleOrder } = useHooks();
    const { user } = useAuth();
    
    const myPlan = singleOrder.filter(myOrder => myOrder.customerInfo.email === user.email);
    // console.log(myPlan);



    return (
        <div className="container my-orders mt-3">
            <div className="">
                {
                    myPlan.map(order => <Order
                        key={order._id}
                        order={order}
                    />)
                }
            </div>
        </div>
    );
};

export default MyOrdrs;