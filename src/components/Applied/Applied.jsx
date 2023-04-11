import React from 'react';
import { getStoredCart } from '../../utilis/FakeData';
import { useLoaderData } from 'react-router-dom';
import CartItem from './CartItem';

const Applied = () => {
    const {initialCart}= useLoaderData()
    return (
        <div>
            {/* Banner section */}

            <div className='mt-10 px-10 '>
                <img className='w-full h-full rounded-lg shadow-lg' src="https://img.freepik.com/free-vector/professional-people-work_24908-58137.jpg?w=826&t=st=1681213025~exp=1681213625~hmac=5e2d6916b39cadd9b1f8bc1437b989bf65f0089f2a1feb69d4ee9d0d8791c862" alt="" />
            </div>
            {/* Banner section ends */}
            <div>
                <h1 className='text-center mt-10 text-3xl font-medium'>Applied <span className='text-blue-500'>Jobs</span></h1>
            </div>
            <div className='mx-32 '>
                {/* Details Show */}

                {
                    initialCart.map(product=><CartItem
                    product={product}
                    key={product.id}
                    ></CartItem>)
                }


            {/* Details Show ends */}
            </div>
            
            
        </div>
    );
};

export default Applied;