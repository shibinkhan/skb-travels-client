import { useEffect, useState } from 'react';

const useHooks = () => {
    const [services, setServices] = useState([]);
    const [singleOrder, setSingleOrder] = useState([]);

    // services
    useEffect(() => {
        fetch('http://localhost:5000/plans')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data);
            });
    }, []);

    // plans
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleOrder(data);
            });
    }, [setSingleOrder]);

    return {
        services,
        singleOrder,
        setSingleOrder
    };
};

export default useHooks;