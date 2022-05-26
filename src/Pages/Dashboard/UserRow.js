import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an admin');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success('This user is now an admin.');
                }
            })
        // .then(res => {
        //     if (res.status === 403) {
        //         toast.error('failed to make an admin');
        //     }
        //     return res.json();
        // })
        // .then(data => {
        //     if (data.modifiedCount) {
        //         refetch();
        //         toast.success('Successfully made an admin');
        //     }
        // })
    }

    return (
        <div>
            <div className='w-full lg:w-3/5 2xl:w-1/2 mx-auto '>
                <div className='flex bg-white justify-center items-center hover:bg-gray-100 hover:cursor-text'>
                    <p className='w-3/5 h-16 flex items-center justify-center font-medium text-sm lg:text-lg  text-center p-2 border-x-[2px] border-b-[2px] border-gray-300'>{email}</p>

                    <div className='w-2/5 h-16 flex justify-center items-center border-r-[2px] border-b-[2px] border-gray-300'>
                        {
                            (user.role === "admin") ? <button disabled className=" border-2 border-sky-500 bg-sky-500 text-sm text-white font-medium px-2 py-1 rounded-lg w-16">Admin</button>
                                :
                                <button onClick={makeAdmin} className="hover:cursor-pointer border-2 border-sky-500 bg-sky-500 text-sm text-white hover:text-sky-500 hover:bg-white font-medium px-2 py-1 rounded-lg w-28 transition ease-in-out">Make Admin</button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRow;