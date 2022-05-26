import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const SingleOrder = ({ order }) => {
    const { _id, name, product, email, price } = order;
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);

    const gotopayment = id => {
        navigate(`/dashboard/payment/${id}`);
    }

    // const deleteOrder = id => {
    //     if(order.paid === true){
    //         fetch(`http://localhost:5000/orders/${id}`, {
    //             method: 'DELETE',
    //             headers: {

    //             }
    //         })
    //     }

    // };

    return (
        <div className=' '>
            <div className='w-full lg:w-4/5 2xl:w-3/4 mx-auto  '>
                <div className='flex bg-white justify-center items-center hover:bg-gray-100 hover:cursor-text'>
                    <p className='w-2/5 h-16 flex items-center justify-center font-medium text-sm lg:text-xl text-center p-2 border-x-[2px] border-b-[2px] border-gray-300'>{product}</p>
                    <p className='w-1/5 h-16 flex items-center justify-center font-semibold text-sm lg:text-base text-center p-2 border-r-[2px] border-b-[2px] border-gray-300'>${price}</p>
                    <div className='w-1/5 h-16 flex justify-center items-center border-b-[2px] border-r-[2px] border-gray-300'>
                        {(price && order.paid) && <p className='overflow-scroll 2xl:overflow-hidden text-orange-500 flex items-center justify-center font-semibold text-sm'>{order.transactionId}</p>}
                        {(price && !order.paid) && <button onClick={() => gotopayment(_id)} className='border-2 border-emerald-500 text-sm bg-emerald-500 text-white hover:text-emerald-500 hover:bg-white font-medium px-2 py-1 rounded-lg w-12 lg:w-16  transition ease-in-out'>Pay</button>}

                    </div>
                    <div className='w-1/5 h-16 flex justify-center items-center border-r-[2px] border-b-[2px] border-gray-300'>
                        {
                            (price && order.paid) && <label className="hover:cursor-pointer border-2 border-red-500 bg-red-500 text-sm text-white hover:text-red-500 hover:bg-white font-medium px-2 py-1 rounded-lg w-16 transition ease-in-out">Delete</label>
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

export default SingleOrder;