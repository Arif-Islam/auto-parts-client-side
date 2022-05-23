import React from 'react';

const PartsCard = ({ part, refetch }) => {
    const { name, image, orderQuantity, availableQuantity, description, price } = part;

    return (
        <div className='relative w-[400px] shadow-lg'>
            <div className='flex flex-col items-center justify-center rounded border'>
                <div>
                    <img className='w-64 md:w-72 object-cover rounded pb-2 hover:opacity-80 hover:cursor-text' src={image} alt="" />
                    <div className='absolute top-0 left-0'>
                        <div className='bg-[#0eadc9] text-white text-lg font-medium p-3 rounded w-20 text-center'>
                            <p>{price}</p>
                        </div>
                    </div>
                </div>
                <div className='h-[450px] md:h-[365px] p-4 '>
                    <p className='bg-black text-white hover:text-gray-200 text-xl font-medium text-center p-2 rounded-sm mb-2'>{name}</p>
                    <p className=' text-base tracking-tight text-justify mb-2 h-[200px] md:h-[135px] flex items-center overflow-hidden'>{description}</p>
                    <hr className='mb-2' />
                    <p className='text-center font-medium mb-1'>Minimum order quantity: {orderQuantity}</p>
                    <p className='text-center font-medium mb-2'>Available in stock: {availableQuantity}</p>
                    <hr className='mb-4' />
                    <div className='text-center'>
                        <button className='w-52 bg-black text-white p-3 font-medium tracking-wider rounded-sm hover:bg-[#0cabc7] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;