import { useEffect, useState } from 'react';

const useHooks = () => {
    const [services, setServices] = useState([]);
    const [singleOrder, setSingleOrder] = useState([]);

    // services
    useEffect(() => {
        fetch('https://fast-taiga-62917.herokuapp.com/plans')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data);
            });
    }, []);

    // plans
    useEffect(() => {
        fetch('https://fast-taiga-62917.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleOrder(data);
            });
    }, []);

    return {
        services,
        singleOrder,
        setSingleOrder
    };
};

export default useHooks;