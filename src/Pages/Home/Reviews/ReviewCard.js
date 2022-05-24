import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ReviewCard = ({ singleReview, refetch }) => {
    const { name, image, rating, review } = singleReview;


    return (
        <div className='shadow-lg rounded p-6 bg-white hover:shadow-xl'>
            <div className=' md:w-[500px]'>
                <div className='flex space-x-4 items-center mb-4'>
                    <img className='w-20 h-20 lg:w-24 lg:h-24 hover:scale-90 transition ease-in-out object-cover rounded-full border-cyan-500 border-2' src={image} alt="" />
                    <div className='flex flex-col'>
                        <p className='md:text-lg text-[#0eadc9] font-semibold'>{name}</p>
                        <div className='flex  text-stone-200 w-full pb-2'>
                            <Rating
                                initialRating={rating}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon style={{ color: 'rgb(250 204 21)' }} icon={faStar} />}
                                fractions={2}
                                readonly
                            />
                        </div>
                    </div>
                </div>
                <div className='md:h-[100px] overflow-hidden'>
                    <p className='text-justify font-light'>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;