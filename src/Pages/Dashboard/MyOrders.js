import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SingleOrder from './SingleOrder';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const email = user.email;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://auto-parts-server-rnsc.onrender.com/my_orders?email=${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => setOrders(data));
    }, [email, orders]);


    return (
        <div>
            <p className='text-center text-2xl lg:text-3xl font-medium my-10'>My Orders</p>

            {
                orders.length && <>
                    <div className=''>
                        <div className='w-full lg:w-4/5 2xl:w-3/4 mx-auto'>
                            <div className='flex bg-gray-200 flex-wrap hover:cursor-text'>
                                <p className='p-2 w-2/5 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-300'>Product</p>
                                <p className='p-2 w-1/5 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-0 md:border-r-2 border-gray-300'>Total price</p>
                                <p className='p-2 w-1/5 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-0 md:border-r-2 border-gray-300'>Payment</p>
                                <p className='p-2 w-1/5 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-0 md:border-r-2 border-gray-300'>Remove Order</p>
                            </div>
                        </div>
                    </div>
                </>
            }
            <div>
                {
                    orders.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>)
                }
            </div>

        </div>
    );
};

export default MyOrders;