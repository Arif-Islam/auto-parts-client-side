import React from 'react';
import { useQuery } from 'react-query';
import useProducts from '../../../hooks/useProducts';
import Spinner from '../../../Shared/Spinner';
import PartsCard from './PartsCard';

const Parts = () => {
    const [parts] = useProducts();

    // if (isLoading) {
    //     return <Spinner></Spinner>;
    // }

    // refetch();

    return (
        <div>
            <div className=' py-10'>
                <p className='text-center text-2xl lg:text-3xl font-medium mb-3'>Best Auto Parts</p>
                <hr className='w-24 mx-auto border-black' />
            </div>
            <div className='w-11/12 md:w-4/5 mx-auto pb-16 mb-6'>
                <div className='flex gap-10 flex-wrap items-center justify-center'>
                    {
                        [...parts].reverse().slice(0, 6).map(part => <PartsCard
                            key={part._id}
                            part={part}
                        ></PartsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Parts;