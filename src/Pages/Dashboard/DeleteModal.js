import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ order }) => {
    const {_id, product, price } = order;
    const deleteOrder = id => {
        // const paid = order.hasOwnProperty('paid');
        // console.log('paid', paid)
        // console.log(order)
        // if('paid' in order){
        //     console.log('paid')
        //     toast.error("Payment is done for this order. You can't delete this order!")
        // }
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Your order deleted!');
        })
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Are you sure you want to delete this order?</h3>
                    <p class="py-4 font-medium">Your order is for {product} and it will cost ${price}.</p>
                    <div className='flex space-x-3 justify-end items-baseline'>
                        <button onClick={() => deleteOrder(_id)} className='bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded h-10 '>Yes</button>
                        <div class="modal-action">
                            <label for="delete-modal" class="btn text-white">No</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;