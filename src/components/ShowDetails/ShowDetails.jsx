import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { MapPinIcon,CurrencyDollarIcon,BriefcaseIcon,PhoneIcon,AtSymbolIcon} from '@heroicons/react/24/solid'
import { addToDb } from '../../utilis/FakeData';

const ShowDetails = () => {
    const param=useParams()
    const loader=useLoaderData()
    const [state, setState]=useState({})

    const handleBtn=id=>{
      
      addToDb(id)
    }

    
    useEffect(()=>{
        const singleData=loader.find(d=>d.id==param.CardId)
        if(singleData){
         setState(singleData)
        }
        
    },[])
    return (
        <div className='grid md:grid-cols-2 px-16 mt-20 gap-20'>
            {/* right div */}
            <div className='text-lg'>
                <h4 className='mt-8'><span className='font-bold mt-10'>Job Description:</span> {state.description}</h4>
                <h4 className='mt-8'><span className='font-bold mt-10'>Job Responsibility:</span> {state.responsibility}</h4>
                <h4 className='mt-8'><span className='font-bold mt-10'>Educational Requirements:</span> {state.educational}</h4>
                <h4 className='mt-8 mb-10'><span className='font-bold '>Experience:</span>  {state.experiences}</h4>
            </div>

            {/* right  div ends */}

            {/* left side */}
            <div >
               <div className='bg-blue-100 p-5 rounded-xl w-96 shadow-lg mt-5'>
               <h4 className='text-xl font-bold'>Job Details</h4>
                <hr className='mt-5'  />
              <div className='flex mt-5 gap-2'>
              <CurrencyDollarIcon className='w-6 text-purple-500'></CurrencyDollarIcon>
              <h4> <span className='font-bold'>Salary</span>: </h4>
              <span>{state.salary} (Per Month)</span>
              </div>

              <div className='flex gap-2 mt-5'>
                <BriefcaseIcon className='w-6 text-purple-500'></BriefcaseIcon>
                <h4 className='font-bold '>Job Title: </h4>
                <span>{state.title}</span>

              </div>
              <h4 className='text-xl font-bold mt-8' >Contact Information</h4>
              <hr className='mt-5' />
              <div className='flex mt-5 gap-2'>
                <PhoneIcon className='w-6 text-purple-500'></PhoneIcon>
                <h4> <span className='font-bold'>Phone : </span></h4>
                <span>{state.phone}</span>
              </div>
              <div className='flex mt-5 gap-2'>
                <AtSymbolIcon className='w-6 text-purple-500'></AtSymbolIcon>
                <h4> <span className='font-bold'>Email :</span></h4>
                <span>{state.email}</span>
              </div>
              <div className='flex mt-5 gap-2'>
                <MapPinIcon className='w-6 text-purple-500'></MapPinIcon>
                <h4><span className='font-bold'>Address :</span></h4>
                <span>{state.location}</span>
              </div>

               </div>
              <div className='md:relative left-8'>
              <button onClick={()=>handleBtn(state.id)} className='nav-btn mt-7 mb-5 w-full '>Apply Now</button>

              </div>
            </div>

            {/* left side */}
            
        </div>
    );
};

export default ShowDetails;