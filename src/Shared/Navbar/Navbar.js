import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/auto parts logo.png';
import { XIcon, MenuIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [user] = useAuthState(auth);
    // console.log(user);
    const navigate = useNavigate();
    const doSignOut = () => {
        // console.log('signed out', user);
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/login');
    }
    const gotohome = () => {
        navigate('/');
    }
    return (
        <div className='bg-[#181818] sticky top-0 z-20 py-6 text-white'>
            <div className='hidden lg:block w-11/12 mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='w-1/3 mx-auto'>
                        <div className='flex flex-col justify-center items-center'>
                            <div onClick={gotohome} className="hover:cursor-pointer">
                                <img className='w-40' src={logo} alt="site logo" />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 mx-auto'>
                        <div className='flex space-x-6 justify-center items-center '>
                            <div className=''>
                                <NavLink to='/'>Home</NavLink>
                            </div>
                            <div className=''>
                                <NavLink to='/blogs'>Blogs</NavLink>
                            </div>
                            <div className=''>
                                <NavLink to='/myportfolio'>My Portfolio</NavLink>
                            </div>
                            {
                                user &&
                                <div>
                                    <NavLink to='/dashboard'>Dashboard</NavLink>
                                </div>

                            }
                        </div>
                    </div>
                    <div className='w-1/3 mx-auto'>
                        <div className='flex space-x-6 justify-center items-center'>
                            {
                                user ? <>

                                    <div onClick={doSignOut}>
                                        <NavLink to='/login'>Logout</NavLink>
                                    </div>
                                    <div className='font-medium uppercase text-sm flex items-center justify-center hover:text-[#0eadc9] trasition ease-in-out'>
                                        <AiOutlineUser className='w-5 h-5 mr-1'></AiOutlineUser>
                                        <p>{user?.displayName}</p>
                                    </div>
                                </>
                                    :
                                    <div className=''>
                                        <NavLink to='/login'>Login</NavLink>
                                    </div>
                            }

                        </div>
                    </div>

                </div>
            </div>

            <div className='lg:hidden'>
                <div className='flex justify-between items-center w-11/12 md:w-4/5 mx-auto'>
                    <div className='flex flex-col justify-end items-end'>
                        <div onClick={gotohome} className="hover:cursor-pointer">
                            <img className='w-36' src={logo} alt="site logo" />
                        </div>
                    </div>
                    <div className='flex justify-end items-end'>
                        {showNav ?
                            <div onClick={() => setShowNav(!showNav)} className='bg-white w-9 rounded'>
                                <XIcon className='cursor-pointer w-8 h-8 text-black pl-1'>
                                </XIcon>
                            </div>
                            :
                            <div onClick={() => setShowNav(!showNav)} className='bg-white w-9 rounded'>
                                <MenuIcon onClick={() => setShowNav(!showNav)} className='cursor-pointer w-8 h-8 text-black pl-1'></MenuIcon>
                            </div>
                        }
                    </div>
                </div>
                <div className={(showNav ? "top-[75px] bg-[#181818]" : "-top-full") + " fixed text-white h-[260px] rounded w-full space-y-3 items-center transition-top duration-500 ease-in-out text-center"}>
                    <div className='mt-2 md:mt-0 '>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/blogs'>Blogs</NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/myportfolio'>My Portfolio</NavLink>
                    </div>
                    {
                        user ? <>
                            <div>
                                <NavLink to='/dashboard'>Dashboard</NavLink>
                            </div>
                            <div className=''>
                                <label for="dashboard-sidebar" class=" lg:hidden">Open Drawer</label>
                            </div>
                            <div onClick={doSignOut}>
                                <NavLink to='/login'>Logout</NavLink>
                            </div>
                            <div className='font-medium uppercase text-sm flex items-center justify-center hover:text-[#0eadc9] trasition ease-in-out'>
                                <AiOutlineUser className='w-5 h-5 mr-1'></AiOutlineUser>
                                <p>{user?.displayName}</p>
                            </div>
                        </>
                            :
                            <div className=''>
                                <NavLink to='/login'>Login</NavLink>
                            </div>
                    }
                </div>

            </div>

        </div>
    );
};

export default Navbar;