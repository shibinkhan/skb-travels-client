import React from 'react';
import useHooks from '../../../Hooks/useHooks';
import ManageOrders from './ManageOrders';

const ManageAllOrders = () => {
    const { singleOrder } = useHooks();

    return (
        <div className="container my-orders mt-4 pb-3">
            <div className="">
                {
                    singleOrder.map(order => <ManageOrders
                        key={order._id}
                        order={order}
                    />)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;