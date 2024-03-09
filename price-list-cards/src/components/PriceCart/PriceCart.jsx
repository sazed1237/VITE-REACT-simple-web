import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({ price }) => {
    // console.log(price)

    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-5 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-600 text-4xl font-extrabold'>{price.price}</span>
                <span className='text-white font-semibold'>/month</span>
            </h2>
            <h5 className='text-2xl font-bold text-center mt-6'>{price.name}</h5>

            <h6 className='mt-4 mb-2 text-xl text-purple-800 font-semibold underline'>
                Features:
            </h6>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='w-full mt-auto bg-green-400 hover:bg-green-600 duration-500 py-2 rounded text-yellow-50 font-semibold'>Buy Now</button>
        </div>
    );
};

export default PriceCart;