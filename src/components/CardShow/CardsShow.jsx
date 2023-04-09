import React from 'react';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'


const CardsShow = ({cards}) => {
    console.log(cards);
    const{logo,title,name,job,time,location,salary}=cards
    return (
        <div>
            {/* Featured Jobs started here */}

        
            <div className='w-full h-96 bg-white border shadow-xl p-3'>
               <div className='relative left-2'>
               <img className='w-24 h-20 rounded-lg' src={logo} alt="" />
                <h2 className='text-2xl mt-3 font-semibold'>{title}</h2>
                <h4 className='text-xl font-medium mt-3'>{name}</h4>
                <div className='flex mt-3 text-center gap-5 p-1 text-lg font-medium'>
                    <div className='w-28 border-2 text-blue-600 border-sky-500 p-2'>{job.first}</div>
                    <div className='w-28 border-2 text-blue-600 border-sky-500 p-2'>{time.second}</div>
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
                    <button className='nav-btn mt-5'>View Details</button>

               </div>
            </div>

       

            {/* Featured Jobs ends here */}
            
        </div>
    );
};

export default CardsShow;