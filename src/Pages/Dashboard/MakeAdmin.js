import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://auto-parts-backend.onrender.com/users/', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <>
            <div className='mt-10'></div>
            <Spinner></Spinner>
        </>
    }
    return (
        <div>
            <p className='text-center text-2xl lg:text-3xl font-medium my-10'>Make An User Admin</p>
            <div className='w-full lg:w-3/5 2xl:w-1/2 mx-auto'>
                <div className='flex bg-gray-200 flex-wrap hover:cursor-text'>
                    <p className='p-2 w-3/5 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-300'>Email</p>
                    <p className='p-2 w-2/5 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-0 md:border-r-2 border-gray-300'>Make Admin</p>
                </div>
            </div>
            <div>
                {
                    users.map(user => <UserRow key={user._id} user={user} refetch={refetch}></UserRow>)
                }
            </div>
        </div>
    );
};

export default MakeAdmin;