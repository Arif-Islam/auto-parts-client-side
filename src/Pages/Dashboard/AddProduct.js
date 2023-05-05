import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);

    const addProduct = event => {
        event.preventDefault();
        const product = {
            name: event.target.name.value,
            image: event.target.image.value,
            user: user?.email,
            price: event.target.price.value,
            orderQuantity: event.target.minimumQuantity.value,
            availableQuantity: event.target.availableQuantity.value,
            description: event.target.description.value
        };
        fetch('https://auto-parts-server-rnsc.onrender.com/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("New Product is added successfully!");
                }
                console.log('product', data);
            })
        event.target.reset();
    }

    return (
        <div>
            <p className='text-center text-2xl lg:text-3xl font-medium my-10'>Add Product</p>
            <form onSubmit={addProduct} className='flex flex-col items-center justify-center'>
                <input className='w-72 md:w-96 h-12 bg-gray-200 rounded pl-4 text-stone-800 focus:outline-none mb-3' type="text" placeholder='Product Name' name="name" />
                <input className='w-72 md:w-96 h-12 bg-gray-200 rounded pl-4 text-stone-800 focus:outline-none mb-3' type="url" id="" name="image" placeholder='Image Direct Link'></input>
                <input className='w-72 md:w-96 h-12 bg-gray-200 rounded pl-4 text-stone-800 focus:outline-none mb-3' type="text" placeholder="Price" name="price" required />
                <input className='w-72 md:w-96 h-12 bg-gray-200 rounded pl-4 text-stone-800 focus:outline-none mb-3' type="text" placeholder="Minimum Order Quantity" name="minimumQuantity" required />
                <input className='w-72 md:w-96 h-12 bg-gray-200 rounded pl-4 text-stone-800 focus:outline-none mb-3' type="text" placeholder="Available Quantity" name="availableQuantity" required />
                <textarea className='p-2 w-72 lg:w-96 h-24 rounded bg-gray-200 text-stone-800 focus:outline-none mb-4' name="description" placeholder='Short Description'></textarea>
                <button type='submit' className='w-72 md:w-96 bg-[#0eadc9] rounded p-2 text-white hover:bg-[#078fa7] transition hover:ease-in-out tracking-wider font-medium'>Add to Stock</button>
            </form>
        </div>
    );
};

export default AddProduct;