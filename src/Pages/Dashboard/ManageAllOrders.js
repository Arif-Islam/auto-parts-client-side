import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import AdminSingleOrder from './AdminSingleOrder';
import SingleOrder from './SingleOrder';

const ManageAllOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://auto-parts-server-z285.onrender.com/orders/').then(res => res.json()));

    if (isLoading) {
        return <>
            <div className='mt-10'></div>
            <Spinner></Spinner>
        </>
    }
    refetch();

    // const [orders, setOrders] = useState([]);
    // useEffect(() => {
    //     fetch('https://auto-parts-server-z285.onrender.com/orders')
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [orders]);

    return (
        <div>
            <p className='text-center text-2xl lg:text-3xl font-medium my-10'>Manage All Orders</p>
            {
                orders.length && <>
                    <div className=''>
                        <div className='w-full lg:w-4/5 2xl:w-3/4 mx-auto'>
                            <div className='flex bg-gray-200 flex-wrap hover:cursor-text'>
                                <p className='p-2 w-1/4 md:w-1/3 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-300'>Product</p>
                                <p className='p-2 w-1/6 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-0 md:border-r-2 border-gray-300'>Total price</p>
                                <p className='p-2 w-1/6 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-0 md:border-r-2 border-gray-300'>Status</p>
                                <p className='p-2 w-1/6 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-0 md:border-r-2 border-gray-300'>Update Status</p>
                                <p className='p-2 w-1/4 md:w-1/6 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-0 md:border-r-2 border-gray-300'>Remove Order</p>
                            </div>
                        </div>
                    </div>
                </>
            }
            <div>
                {
                    orders.map(order => <AdminSingleOrder key={order._id} order={order}></AdminSingleOrder>)
                }
            </div>
            <div className='h-20'></div>
        </div>
    );
};

export default ManageAllOrders;