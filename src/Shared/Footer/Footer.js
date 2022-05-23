import React from 'react';
import logo from '../../images/auto parts logo.png';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className='bg-[#181818] p-8'>
            <div className='flex flex-col items-center justify-center '>
                <img className='w-40 hover:cursor-pointer pb-5' src={logo} alt="" />
                <div className='flex space-x-8 pb-6'>
                    <BsFacebook className='w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:text-[#0eadc9]'></BsFacebook>
                    <BsInstagram className='w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:text-[#0eadc9]'></BsInstagram>
                    <BsTwitter className='w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:text-[#0eadc9]'></BsTwitter>
                    <BsLinkedin className='w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:text-[#0eadc9]'></BsLinkedin>
                </div>
                <p className='text-white font-light'>© 2022 Dev — <span className='text-[#0eadc9] font-normal'>@Md Ariful Islam</span></p>
            </div>
        </div>
    );
};

export default Footer;