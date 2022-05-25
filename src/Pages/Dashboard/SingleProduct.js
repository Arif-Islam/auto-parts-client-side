import React, { useState } from 'react';
import DeleteModal from './DeleteModal';
import DeleteProductModal from './DeleteProductModal';

const SingleProduct = ({ part }) => {
    const { name, image, price } = part;
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className='w-full lg:w-11/12 mx-auto '>
                <div className='flex bg-white justify-center items-center hover:bg-gray-100 hover:cursor-text'>
                    <div className='w-1/4 h-28 flex items-center justify-center  p-2 border-x-[2px] border-b-[2px] border-gray-300'>
                        <img className='w-16 md:w-24' src={image} alt="" />
                    </div>
                    <p className='w-1/4 h-28 flex items-center justify-center font-semibold text-sm lg:text-base text-center p-2 border-r-[2px] border-b-[2px] border-gray-300'>{name}</p>
                    <p className='w-1/4 h-28 flex items-center justify-center font-semibold text-sm lg:text-base text-center p-2 border-r-[2px] border-b-[2px] border-gray-300'>${price}</p>

                    <div className='w-1/4 h-28 flex justify-center items-center border-r-[2px] border-b-[2px] border-gray-300'>
                        <label onClick={() => setOpenModal(true)} htmlFor="delete-product-modal" className="hover:cursor-pointer border-2 border-red-500 bg-red-500 text-sm text-white hover:text-red-500 hover:bg-white font-medium px-2 py-1 rounded-lg w-16 transition ease-in-out">Delete</label>
                    </div>
                </div>
            </div>
            {openModal && <DeleteProductModal key={part._id} part={part}></DeleteProductModal>}

        </div>
    );
};

export default SingleProduct;