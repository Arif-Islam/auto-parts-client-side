import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1ak9FP9wwITSeP2TBKTWHwoTVQaTCu4aKTn7XVqgjbzh6NXaujccBFcOa9n6BOLbZj1eJeboJY5ONgEha2Wdu200gQY3RgUi');

const Payment = () => {
    const { id } = useParams();
    const url = `https://auto-parts-server-z285.onrender.com/orders/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Spinner></Spinner>;
    }

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