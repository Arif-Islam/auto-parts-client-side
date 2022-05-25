import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Spinner from '../../Shared/Spinner';
import { toast } from 'react-toastify';
import { async } from '@firebase/util';
// import useToken from '../../hooks/useToken';
import Navbar from '../../Shared/Navbar/Navbar';
import { BsGoogle } from "react-icons/bs";
import addUser from './addUser';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetPasswordError] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { register, getValues, formState: { errors }, handleSubmit } = useForm();
    // const [token] = useToken(user || gUser);

    useEffect(() => {
        if (user || gUser) {
            // console.log(user || gUser);
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate]);

    if (loading || gLoading || sending) {
        return <>
            <div className='mt-20'>
            </div>
            <Spinner></Spinner>
        </>
    }

    const resetPassword = async () => {
        const email = getValues("email");
        console.log('user email', email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password Reset Email sent');
        }
        else {
            toast('Please enter your email address!');
        }
    }
    let signInError;
    if (error || gError || resetPasswordError) {
        signInError = <p className='text-red-500 font-medium text-center'>{error?.message || gError?.message || resetPasswordError?.message}</p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        // navigate('/appointment');
    };

    const gotosignup = () => {
        navigate('/signup');
    }

    if(user || gUser){
        addUser(user || gUser);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-[350px] md:w-[400px] mx-auto mt-20 shadow-md border p-5 rounded-lg'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl mb-10 text-gray-800 font-medium'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
                        <div className='mb-4'>
                            {/* <p className='text-gray-800 pl-1'>Email</p> */}
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a Valid Email'
                                }
                            })} className='w-72 md:w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="email" name="email" id="" placeholder='Email' />
                            <p>
                                {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                            </p>
                        </div>
                        <div className='mb-2'>
                            {/* <p className='text-gray-800 pl-1'>Password</p> */}
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or longer.'
                                }
                            })} className='w-72 md:w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="password" id="" placeholder='Password' />
                            <p>
                                {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                            </p>
                        </div>
                        <div className='-ml-40 md:-ml-48'>
                            <button onClick={resetPassword} className='text-sm font-medium text-red-500 hover:text-red-600 mb-4 pl-1'>
                                Forgot Password?
                            </button>
                        </div>

                        {signInError}
                        <button className='w-72 md:w-80 bg-[#0eadc9] rounded p-2 text-white hover:bg-[#078fa7] transition hover:ease-in-out tracking-wider font-medium' type='submit'>Login</button>

                        <div className='flex justify-center space-x-2 mt-3 text-sm'>
                            <p className='text-gray-800'>New to Auto Parts?</p>
                            <div className=''>
                                <button onClick={gotosignup} className='text-[#0eadc9] font-medium'>Create an account</button>
                            </div>
                        </div>
                        <div className='flex space-x-4 items-center justify-center my-4'>
                            <hr className='text-black w-32' />
                            <p>OR</p>
                            <hr className='text-black w-32' />
                        </div>
                    </form>

                    <div onClick={() => signInWithGoogle()} className='flex items-center justify-center hover:cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all ease-in-out text-[#0eadc9]  p-3 rounded'>
                        <BsGoogle className='w-6 h-6 mr-3'></BsGoogle>
                        <button className='text-[#0eadc9] uppercase font-medium rounded tracking-wider'>Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;