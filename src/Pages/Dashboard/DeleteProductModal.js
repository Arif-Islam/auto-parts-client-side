import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({ part }) => {
    const { _id, name, price } = part;

    const deleteProduct = id => {
        fetch(`https://auto-parts-server-rnsc.onrender.com/parts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('This product is deleted!');
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-product-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="delete-product-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Are you sure you want to delete this product?</h3>
                    <p class="py-4 font-medium">This product is {name} and it costs ${price}</p>
                    <div className='flex space-x-3 justify-end items-baseline'>
                        <button onClick={() => deleteProduct(_id)} className='bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded h-10 '>Yes</button>
                        <div class="modal-action">
                            <label for="delete-product-modal" class="btn text-white">No</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;