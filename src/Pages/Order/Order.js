import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Spinner from '../../Shared/Spinner';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';


const Order = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const { name, image, description, price, orderQuantity, availableQuantity } = product;


    const minimum = parseInt(orderQuantity);

    const [num, setNum] = useState(minimum);

    console.log('minimum and num', minimum, num);
    const incNum = () => {
        setNum(num + 1);
    };
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    const handleChange = event => {
        setNum(event.target.value);
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28 mb-10'>
                <div className='flex flex-col items-start justify-center mt-10'>
                    <img className='w-64' src={image} alt="" />
                    <p className='text-2xl text-[#0eadc9] font-medium mb-2'>{name}</p>
                    <p className='font-bold text-lg mb-2'>Price: {price}</p>
                    <p className='w-80 lg:w-96 text-justify mb-2'>{description}</p>
                    <p className='font-medium mb-1'>Available quantity of this product: <span className='text-gray-700 font-semibold'>{availableQuantity}</span></p>
                    <p className='font-medium mb-1'>Minimum order quantity: <span className='text-gray-700 font-semibold'>{minimum}</span></p>
                    <p className='text-lg font-medium mb-2'>Select Quantity</p>
                    <div className='flex items-center justify-center space-x-1'>
                        <AiOutlineMinus onClick={decNum} className='w-6 h-6 hover:cursor-pointer transition focus:ease-linear' style={{ color: '#0eadc9' }}></AiOutlineMinus>
                        <input onChange={handleChange} className='w-32 h-10 px-2 border-2 border-black rounded' type="text" name='number' value={num} />
                        <AiOutlinePlus onClick={incNum} className='w-6 h-6 hover:cursor-pointer' style={{ color: '#0eadc9' }}></AiOutlinePlus>
                        {/* <button  className='w-28 bg-black text-white p-2  font-medium tracking-wider rounded hover:bg-[#0cabc7] transition hover:ease-linear'>Choose</button> */}
                    </div>
                </div>
                <div className=''>
                    <p className='text-2xl font-medium text-center mb-4'>Place Order</p>
                    <form className='flex flex-col space-y-4 items-center justify-center'>
                        <input className='w-80 border-2 rounded p-2 border-[#0eadc9]' type="text" placeholder='Name' />
                        <input className='w-80 border-2 rounded p-2 border-[#0eadc9]' type="email" placeholder='Email' />
                        <input className='w-80 border-2 rounded p-2 border-[#0eadc9]' type="text" placeholder='Address' />
                        <input className='w-80 border-2 rounded p-2 border-[#0eadc9]' type="text" placeholder='Phone Number' />
                        <button className='w-36 bg-black text-white p-3 font-medium tracking-wider rounded hover:bg-[#0cabc7] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;