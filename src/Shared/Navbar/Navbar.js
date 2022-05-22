import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/auto parts logo.png';
import { XIcon, MenuIcon } from '@heroicons/react/solid';
import './Navbar.css';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    // const [user] = useAuthState(auth);
    // console.log(user);
    // const navigate = useNavigate();
    // const doSignOut = () => {
    //     console.log('signed out', user);
    //     signOut(auth);
    //     navigate('/login');
    // }

    return (
        <div className='bg-[#181818] sticky top-0 z-20 py-6 text-white'>
            <div className='hidden lg:block w-11/12 mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='w-1/3 mx-auto'>
                        <div className='flex flex-col justify-center items-center'>
                            <div>
                                {/* <Link to='/'> */}
                                <img className='w-40' src={logo} alt="site logo" />
                                {/* </Link> */}
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
                                <NavLink to='/about'>My Portfolio</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 mx-auto'>
                        <div className='flex space-x-6 justify-center items-center'>
                            <div className=''>
                                <NavLink to='/login'>Login</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* <div className='w-1/3 mx-auto'>
                        <div className='flex pr-16 space-x-6 justify-center items-center '>
                            {
                                user ? <>
                                    <div className='hover:text-[#0E9CF6]'>
                                        <NavLink to='/manageinventory'>Manage Inventory</NavLink>
                                    </div>
                                    <div className='hover:text-[#0E9CF6]'>
                                        <NavLink to='/addnewitem'>Add Item</NavLink>
                                    </div>
                                    <div className='hover:text-[#0E9CF6]'>
                                        <NavLink to='/myitems'>My Items</NavLink>
                                    </div>
                                    <div onClick={doSignOut} className='hover:text-[#0E9CF6] '>
                                        <NavLink to='/login'>Logout</NavLink>
                                    </div>
                                </>
                                    : <div className='hover:text-[#0E9CF6]'>
                                        <NavLink to='/login'>Login</NavLink>
                                    </div>
                            }
                        </div>
                    </div> */}
                </div>
            </div>

            <div className='lg:hidden'>
                <div className='flex justify-between items-center w-11/12 md:w-4/5 mx-auto'>
                    <div className='flex flex-col justify-end items-end'>
                        <div>
                            {/* <Link to='/'> */}
                                <img className='w-36' src={logo} alt="site logo" />
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className='flex justify-end items-end'>
                        {showNav ?
                            // <div className='flex justify-end items-end'>
                            <div onClick={() => setShowNav(!showNav)} className='bg-white w-9 rounded'>
                                <XIcon className='cursor-pointer w-8 h-8 text-black pl-1'>
                                </XIcon>
                            </div>
                            // </div>
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
                        <NavLink to='/about'>My Portfolio</NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/login'>Login</NavLink>
                    </div>
                    {/* {
                        user ? <>
                            <div className='hover:text-[#0E9CF6] '>
                                <NavLink to='/manageinventory'>Manage Inventory</NavLink>
                            </div>
                            <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/addnewitem'>Add Item</NavLink>
                            </div>
                            <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/myitems'>My Items</NavLink>
                            </div>
                            <div onClick={doSignOut} className='hover:text-[#0E9CF6]'>
                                <NavLink to='/login'>Logout</NavLink>
                            </div>
                        </>
                            : <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/login'>Login</NavLink>
                            </div>
                    } */}

                </div>
            </div>

        </div>
    );
};

export default Navbar;