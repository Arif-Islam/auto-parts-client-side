import React, { useState } from 'react';
import { toast } from 'react-toastify';
import DeleteModal from './DeleteModal';

const AdminSingleOrder = ({ order }) => {

    // const { product, price } = order;

    const { _id, name, product, email, price } = order;
    const [openModal, setOpenModal] = useState(false);

    const makeShipped = id => {
        const deliver = { shipped: true };
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(deliver)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('This product is shipped!');
            })
    }

    return (
        <div>
            <div className='w-full lg:w-4/5 2xl:w-3/4 mx-auto  '>
                <div className='flex bg-white justify-center items-center hover:bg-gray-100 hover:cursor-text'>
                    <p className='w-1/4 md:w-1/3 h-20 md:h-16 flex items-center justify-center font-medium text-sm lg:text-xl  text-center p-2 border-x-[2px] border-b-[2px] border-gray-300'>{product}</p>
                    <p className='w-1/6 h-20 md:h-16 flex items-center justify-center font-semibold text-sm lg:text-base text-center p-2 border-r-[2px] border-b-[2px] border-gray-300'>${price}</p>
                    <div className='w-1/6 h-20 md:h-16 flex justify-center items-center border-b-[2px] border-r-[2px] border-gray-300'>
                        {(price && order.paid && !order.shipped) && <p className=' text-sky-500 flex items-center justify-center font-semibold text-sm'>Pending</p>}
                        {(price && order.paid && order.shipped) && <p className=' text-emerald-500 flex items-center justify-center font-semibold text-sm'>Shipped</p>}
                        {(price && !order.paid) && <p className='text-orange-500 flex items-center justify-center font-semibold text-sm'>Unpaid</p>}

                    </div>
                    <div className='w-1/6 h-20 md:h-16 flex justify-center items-center border-b-[2px] border-r-[2px] border-gray-300'>
                        {(price && !order.paid) && <p className=' text-red-500 flex items-center justify-center font-semibold text-sm'>N / A</p>}
                        {(price && order.paid && order.shipped) && <p className=' text-red-500 flex items-center justify-center font-semibold text-sm'>N / A</p>}
                        {(price && order.paid && !order.shipped) && <button onClick={() => makeShipped(_id)} className='border-2 border-emerald-500 text-xs md:text-sm bg-emerald-500 text-white hover:text-emerald-500 hover:bg-white font-medium px-1 md:px-2 py-1 rounded-lg w-16 md:w-[72px]  transition ease-in-out'>Update</button>}

                    </div>
                    <div className='w-1/4 md:w-1/6 h-20 md:h-16 flex justify-center items-center border-r-[2px] border-b-[2px] border-gray-300'>
                        {
                            (price && order.paid) && <p className=' text-red-500 flex items-center justify-center font-semibold text-sm'>N / A</p>
                        }
                        {
                            (price && !order.paid) && <label onClick={() => setOpenModal(true)} htmlFor="delete-modal" className="hover:cursor-pointer border-2 border-red-500 bg-red-500 text-sm text-white hover:text-red-500 hover:bg-white font-medium px-2 py-1 rounded-lg w-16 transition ease-in-out">Delete</label>
                        }

                    </div>
                </div>
            </div>
            {openModal && <DeleteModal key={order._id} order={order}></DeleteModal>}
        </div>
    );
};

export default AdminSingleOrder;