import React from 'react';
import useProducts from '../../hooks/useProducts';
import Spinner from '../../Shared/Spinner';
import SingleProduct from './SingleProduct';

const ManageProducts = () => {
    const [parts,  refetch] = useProducts();
    // if (isLoading) {
    //     return <Spinner></Spinner>;
    // }
    

    return (
        <div>
            <p className='text-center text-2xl lg:text-3xl font-medium my-10'>Manage All Products</p>
            <div className='w-full lg:w-11/12 mx-auto'>
                <div className='flex bg-gray-200 flex-wrap hover:cursor-text'>
                    <p className='p-2 w-1/4 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-300'>Image</p>
                    <p className='p-2 w-1/4 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-0 md:border-r-2 border-gray-300'>Name</p>
                    <p className='p-2 w-1/4 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-0 md:border-r-2 border-gray-300'>Price</p>
                    <p className='p-2 w-1/4 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-0 md:border-r-2 border-gray-300'>Remove Product</p>
                </div>
            </div>
            {
                parts.map(part => <SingleProduct key={part._id} part={part}></SingleProduct>)
            }
            <div className='h-20'></div>
        </div>
    );
};

export default ManageProducts;