import React, { useEffect } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Spinner from '../../Shared/Spinner';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();


    if (loading || updating) {
        return <>
            <div className='mt-20'></div>
            <Spinner></Spinner>
        </>
    }
    let signInError;
    if (error || updateError) {
        signInError = <p className='text-red-500 font-medium text-center'>{error?.message || updateError?.message}</p>
    }
    if (user) {
        navigate('/home');
    }
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        toast('Verification email sent');
        // navigate('/appointment');
    };

    const gotologin = () => {
        navigate('/login');
    }

    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className='w-[350px] md:w-[400px] mx-auto mt-20 shadow-md border p-5 rounded-lg '>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl mb-10 text-gray-800 font-medium'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} className='w-72 md:w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="name" name="name" id="" placeholder='Name' />
                            <p>
                                {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}
                            </p>
                        </div>
                        <div className='mb-4'>
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
                        <div className='mb-4'>
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

                        {signInError}
                        <button className='w-72 md:w-80 bg-[#0eadc9] rounded p-2 text-white hover:bg-[#078fa7] transition hover:ease-in-out tracking-wider font-medium' type='submit'>Sign Up</button>

                        <div className='flex justify-center space-x-2 mt-3 text-sm mb-2'>
                            <p className='text-gray-800'>Already have an account?</p>
                            <div className='text-secondary font-medium'>
                                <button onClick={gotologin} className='text-[#0eadc9] font-medium'>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;