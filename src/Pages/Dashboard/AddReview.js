import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
// import image from "https://i.ibb.co/ZmFBZcM/60111.jpg";

const AddReview = () => {
    const [user] = useAuthState(auth);
    const image = "https://i.ibb.co/ZmFBZcM/60111.jpg";

    const handleAddReview = event => {
        event.preventDefault();
        const rating = event.target.rating.value;
        const review = event.target.description.value;
        const userReview = {
            name: user?.displayName,
            user: user?.email,
            image,
            rating,
            review
        }
        fetch('https://auto-parts-backend.onrender.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Your review is added successfully!");
                }
                console.log('review', data);
            })

        event.target.reset();
    }
    return (
        <div>
            <p className='text-center text-2xl lg:text-3xl font-medium my-10'>Add Review</p>
            <form onSubmit={handleAddReview} className='flex flex-col items-center justify-center'>
                <select class="select w-72 lg:w-96 border-gray-500 mb-3" name="rating">
                    <option disabled selected>Give your rating</option>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
                <textarea className='p-2 w-72 lg:w-96 h-24 rounded-lg border border-gray-500 mb-4' name="description" placeholder='Your Feedback'></textarea>
                <button type='submit' className='w-36 bg-[#0eadc9] rounded p-2 text-white hover:bg-[#078fa7] transition hover:ease-in-out tracking-wider font-medium'>Post</button>
            </form>
        </div>
    );
};

export default AddReview;