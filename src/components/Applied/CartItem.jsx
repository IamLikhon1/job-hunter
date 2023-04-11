import React from 'react';
import { MapPinIcon,CurrencyDollarIcon,BriefcaseIcon,PhoneIcon,AtSymbolIcon} from '@heroicons/react/24/solid'
import { Link} from 'react-router-dom';

const CartItem = ({product}) => {
    const{id,name,logo,title,job,location,salary,time}=product;
    
    return (
        <div>
            {/* design part */}

            <div className='w-full h-72 flex items-center border-2 mt-5 p-3 shadow-2xl gap-10'>
                <img className='w-32 h-32' src={logo} alt="" />
                <div className='2'>
                    <h2 className='text-2xl mt-3 font-semibold'>{title}</h2>
                    <h2 className='text-xl font-medium mt-3'>{name}</h2>
                    <div className='flex mt-3 text-center gap-5'>
                        <h2 className='w-28 border-2 text-blue-600 border-sky-500 p-2'>{job.first}</h2>
                        <h2 className='w-28 border-2 text-blue-600 border-sky-500 p-2'>{time.second}</h2>
                    </div>
                    <div className="flex mt-4 gap-10">
                    <div className='flex'>
                    <MapPinIcon className='w-6 text-gray-400'></MapPinIcon>
                    <p className='text-lg font-medium'>{location}</p> 
                    </div>
                    <div className='flex text-lg font-medium '>
                        <CurrencyDollarIcon className='w-6  text-gray-400'></CurrencyDollarIcon>
                        <p>Salary:{salary}</p>

                    </div>
                    </div>

                </div>
                <Link to={`/ShowDetails/${id}`}><button className=' md:relative left-60 nav-btn'> View Details</button></Link>

            </div>

            {/* design part ends */}
            
            
        </div>
    );
};

export default CartItem;