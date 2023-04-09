import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

const ShowData = ({data}) => {
    console.log(data);
    const{name,jobs,img}=data
    return (
        <div>
            {/* banner card section starts */}

            <div className=''>
                
            <div className='w-72 h-56 bg-slate-200 shadow-xl rounded-lg'>
               <div className='w-24 relative left-8 top-6 rounded-md h-24 p-2 bg-slate-50 shadow-lg'>
               <img className='w-16 h-16 mx-auto' src={img} alt="" />
               </div>

                <div className='text-center mt-10'>
                <span className='text-xl font-semibold'>{name}</span> <br />
                <span className='text-lg font-thin '>{jobs}</span>
                </div>
               

            </div>
            </div>


            {/* banner card section ends */}
            
        </div>
    );
};

export default ShowData;