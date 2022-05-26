import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1ak9FP9wwITSeP2TBKTWHwoTVQaTCu4aKTn7XVqgjbzh6NXaujccBFcOa9n6BOLbZj1eJeboJY5ONgEha2Wdu200gQY3RgUi');

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`https://pure-inlet-40571.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [id]);
    // console.log('single order', order)

    return (
        <div className='flex flex-col justify-center items-center'>
            <div class="card w-11/12 md:w-[500px] bg-base-100 shadow-lg my-12 border">
                <div class="card-body">
                    <p className="text-success font-bold">Hello " {order.name} "</p>
                    <h2 class="text-xl font-medium">You ordered <span className='text-[#0eadc9]'>{order.product}</span></h2>
                    <p className='font-semibold '>Your total cost ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-11/12 md:w-1/2 max-w-md shadow-lg bg-base-100 border">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;