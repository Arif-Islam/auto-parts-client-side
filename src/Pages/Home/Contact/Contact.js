import React from 'react';

const Contact = () => {
    return (
        <div className=''>
            <p className='text-center text-2xl lg:text-3xl font-medium mb-2 mt-10'>Let's stay in touch</p>
            <hr className='w-20 mx-auto mb-10 border-black' />
            <div className='flex flex-col items-center justify-center mb-10'>
                <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 mb-4 md:mb-6'>
                    <input className='w-80 border-2 rounded p-2 border-[#0eadc9] md:mr-6' type="name" placeholder='Name' />
                    <input className='w-80 border-2 rounded p-2 border-[#0eadc9] ' type="email" placeholder='Email' />
                </div>
                <textarea className='w-80 md:w-[664px] h-32 border-2 rounded p-2 border-[#0eadc9] mb-6' name="" placeholder='Your Message' ></textarea>
                <button className='w-52 bg-black text-white p-3 font-medium tracking-wider rounded-sm hover:bg-[#0cabc7] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>Send Message</button>
            </div>
        </div>
    );
};

export default Contact;