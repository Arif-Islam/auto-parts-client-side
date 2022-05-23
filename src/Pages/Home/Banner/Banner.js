import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../images/endri-killo-siB6rUg8Rk0-unsplash.jpg';
import img2 from '../../../images/mechanic-changing-brake-discs-car-service (1).jpg';
import img3 from '../../../images/campbell-3ZUsNJhi_Ik-unsplash 1.jpg';
import img4 from '../../../images/richard-biros-pXFDctQsUys-unsplash (1).jpg';
import img5 from '../../../images/pexels-jae-park-3752190.jpg';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className='relative'>
            <Carousel autoPlay infiniteLoop interval={5000} showThumbs={false} showStatus={false}>
                <div>
                    <img className='w-full h-[550px] md:h-[550px] object-cover' src={img1} />
                </div>
                <div>
                    <img className='w-full h-[550px] md:h-[550px] object-cover' src={img2} />
                </div>
                <div>
                    <img className='w-full h-[550px] md:h-[550px] object-cover' src={img3} />
                </div>
                <div>
                    <img className='w-full h-[550px] md:h-[550px] object-cover' src={img4} />
                </div>
                <div>
                    <img className='w-full h-[550px] md:h-[550px] object-cover' src={img5} />
                </div>
            </Carousel>
            <div className='flex justify-center'>
                <div className="absolute bottom-28">
                    <button className='hover:cursor-text font-light text-xl text-white border-2 w-96 mx-auto border-white py-1 font-montserat'>
                       The World's Best Auto Parts
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className='absolute bottom-14'>
                    <button className=' text-xl text-black bg-white border-2 w-60 py-1 mx-auto border-white hover:text-white hover:bg-transparent hover:border-gray-800 uppercase font-montserat'>
                        See All Parts
                    </button>
                </div>
            </div>
            {/* <div className='flex justify-center items-center text-2xl lg:text-4xl font-semibold text-white'>
                <div className="absolute bottom-1/2">
                    <Typewriter
                        options={{
                            strings: ['Worlds Best Auto Parts Available', 'Order your desired parts now'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div> */}
        </div>
    );
};

export default Banner;