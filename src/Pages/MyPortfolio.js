import React from 'react';
import Typewriter from 'typewriter-effect';
import sportsgear from '../images/New folder/sports gear.png';
import sylhetsafari from '../images/New folder/sylhet safari.png';
import macsurfer from '../images/New folder/mac surfer.png';
import Footer from '../Shared/Footer/Footer';


const MyPortfolio = () => {
    return (
        <div className='mt-16'>
            <div className=''>
                <div className='w-11/12 md:w-4/5 lg:w-3/4 2xl:w-1/2 mx-auto'>
                    <div className='flex flex-col lg:flex-row gap-10 xl:gap-20 items-center justify-center mb-10 lg:mb-24'>
                        <div>
                            <p className='font-semibold text-3xl mb-1'>Hello!</p>
                            <p className='font-semibold text-3xl mb-1'>I'm Md Ariful Islam</p>
                            <div className='text-xl font-semibold mb-6 text-purple-500'>
                                <Typewriter
                                    options={{
                                        strings: ['A MERN Stack Developer', 'A Creative Designer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                            <p className='font-medium w-72 lg:w-[600px]'>Hi, My name is Md Ariful Islam, and I'm a MERN stack web developer who excels in creating attractive solutions in the smallest period of time. As a web developer, my primary goal is to obtain a responsible and demanding Full Stack Web Developer position that will utilize my degree and job experience.</p>
                        </div>
                        <div className='w-72 lg:w-auto '>
                            <div className=''>
                                <p className='font-semibold text-lg mb-1'>Email:</p>
                                <p className='font-medium mb-3'>arif8491@gmail.com</p>
                            </div>
                            <div className=''>
                                <p className='font-semibold text-lg mb-1'>Github:</p>
                                <p className='font-medium mb-3'>https://github.com/Arif-Islam</p>
                            </div>
                            <div className=''>
                                <p className='font-semibold text-lg mb-1'>Education:</p>
                                <p className='font-medium mb-1'>Completed BSc in CSE.</p>
                                <p className='font-medium mb-6'>Sylhet Engineering College.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-10 lg:mb-20'>
                    <p className='text-center text-2xl font-semibold mb-6 2xl:mb-8'>My Expertise</p>
                    <ul className='flex space-x-2 items-center justify-center flex-wrap'>
                        <li className='font-medium bg-blue-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2'>Javascript</li>
                        <li className='font-medium bg-pink-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2'>Python</li>
                        <li className='font-medium bg-emerald-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2'>C++</li>
                        <li className='font-medium bg-orange-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2'>React JS</li>
                        <li className='font-medium bg-rose-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2'>Node Js</li>
                        <li className='font-medium bg-violet-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2'>Tailwind</li>
                        <li className='font-medium bg-teal-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2'>Bootstrap</li>
                    </ul>
                </div>

                <div className='mb-10 lg:mb-20'>
                    <p className='text-center text-2xl font-semibold mb-6 2xl:mb-10'>Some Of My Works</p>
                    <div className='flex gap-10 items-center justify-center flex-wrap'>
                        <div className='hover:shadow hover:cursor-text flex flex-col items-center justify-center bg-gray-100 p-5 rounded'>
                            <img className='w-64 rounded mb-4' src={sportsgear} alt="" />
                            <p className='font-medium text-lg mb-2'>Sports Gear</p>
                            <p className='text-center h-[48px] flex items-center justify-center'>https://sports-gear-6d1f5.web.app/</p>
                        </div>
                        <div className='hover:shadow hover:cursor-text flex flex-col items-center justify-center  bg-gray-100 p-5 rounded'>
                            <img className='w-64 rounded mb-4' src={sylhetsafari} alt="" />
                            <p className='font-medium text-lg h-14 flex items-center justify-center'>Sylhet Safari</p>
                            <p>https://sylhet-safari.web.app/</p>
                        </div>
                        <div className='hover:shadow hover:cursor-text flex flex-col items-center justify-center bg-gray-100 p-5 rounded'>
                            <img className='w-64  rounded mb-4  ' src={macsurfer} alt="" />
                            <p className='font-medium text-lg h-14 flex items-center justify-center'>Mac Surfer</p>
                            <p>https://mac-surfer.netlify.app/</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;