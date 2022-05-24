import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../../Shared/Spinner';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://pure-inlet-40571.herokuapp.com/reviews').then(res => res.json()));

    if (isLoading) {
        return <Spinner></Spinner>;
    }

    refetch();

    return (
        <div className=''>
            <p className='text-center text-2xl lg:text-3xl font-medium mb-2 '>See what our client says</p>
            <hr className='w-20 mx-auto border-black mb-10' />
            <div className='bg-gray-100 py-20'>
                <div className='w-11/12 md:w-4/5 mx-auto '>
                    <div className='flex gap-10 flex-wrap items-center justify-center'>
                        {
                            reviews.map(singleReview => <ReviewCard
                                key={singleReview._id}
                                singleReview={singleReview}
                                refetch={refetch}
                            ></ReviewCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;