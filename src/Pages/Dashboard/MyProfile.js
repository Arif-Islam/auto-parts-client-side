import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [info, setInfo] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log('user data', data);
                setInfo(data);
            })
    }, [email]);


    const updateUserInfo = event => {
        event.preventDefault();
        const userInfo = {
            name: event.target.name.value,
            location: event.target.location.value,
            education: event.target.education.value,
            phone: event.target.phone.value,
            linkedin: event.target.linkedin.value
        }
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Your profile is updated!");
                }
                // console.log('updated user data', data);
            })
    }

    return (
        <div>
            <p className='text-center text-2xl lg:text-3xl font-medium my-10'>Update Profile</p>
            <form onSubmit={updateUserInfo} className='flex flex-col items-center justify-center'>
                <input className='w-72 md:w-96 h-12 bg-gray-200 rounded pl-4 text-stone-800 focus:outline-none mb-3' type="text" value={user?.displayName} name="name" />
                <input className='w-72 md:w-96 h-12 bg-gray-200 rounded pl-4 text-stone-800 focus:outline-none mb-3' type="email" value={email} />
                <input className='w-72 md:w-96 h-12 bg-gray-200 rounded pl-4 text-stone-800 focus:outline-none mb-3' type="text" placeholder={info.location || "Location"} name="location" required />
                <input className='w-72 md:w-96 h-12 bg-gray-200 rounded pl-4 text-stone-800 focus:outline-none mb-3' type="text" placeholder={info.education || "Education"} name="education" required />
                <input className='w-72 md:w-96 h-12 bg-gray-200 rounded pl-4 text-stone-800 focus:outline-none mb-3' type="text" placeholder={info.phone || "Phone"} name="phone" required />
                <input className='w-72 md:w-96 h-12 bg-gray-200 rounded pl-4 text-stone-800 focus:outline-none mb-3' type="text" placeholder={info.linkedin || "Linkedin Profile Link"} name="linkedin" required />
                <button className='w-72 md:w-96 bg-[#0eadc9] rounded p-2 text-white hover:bg-[#078fa7] transition hover:ease-in-out tracking-wider font-medium'>Update</button>
            </form>
        </div>
    );
};

export default MyProfile;