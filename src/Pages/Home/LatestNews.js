import React from 'react';
import img from '../../images/luxury-sport-car-with-xenon-lights-front-view.jpg'

const LatestNews = () => {
    return (
        <div>
            <p className='text-center text-2xl lg:text-3xl font-medium mb-2 mt-10'>Read Daily Blogs</p>
            <hr className='w-20 mx-auto mb-10 border-black' />
            <div className=' bg-gray-100'>
                <div className='w-11/12 md:w-4/5 mx-auto '>
                    <div className='2xl:mx-32 flex flex-col lg:flex-row gap-8 lg:gap-10 2xl:gap-16 items-center justify-center py-16 flex-wrap 2xl:flex-nowrap'>
                        <img className='w-36 lg:w-[200px] 2xl:w-[500px] rounded' src={img} alt="" />
                        <div>
                            <p className='font-medium text-lg mb-3'>Read our official blogs when you have time. In our blog, we post about new upcoming parts that we're manufacturing. Our blogs posts also consists of any upgrade that we made on any parts. You'll know a lot of things reading our blog posts. </p>
                            <button className='w-40 bg-black text-white p-3 font-medium tracking-wider rounded-sm hover:bg-[#0cabc7] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>See Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LatestNews;