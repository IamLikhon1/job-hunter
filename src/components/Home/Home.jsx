import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowData from '../ShowData.jsx/ShowData';
import CardsShow from '../CardShow/CardsShow';

const Home = () => {
    const loadData=useLoaderData()
    const [cardData,setCardData]=useState([])
    
    
    useEffect(()=>{
        fetch('cardData.json')
        .then(res=>res.json())
        .then(data=>{
            setCardData(data);
        })
    },[])
    return (
        <div>
            {/* Banner section start */}

            <div className='md:flex justify-around px-20 mt-20'>
                <div className="banner-text">
                    <h1 className='text-7xl font-semibold '>One Step <br /> Closer To Your <br /> <span className='text-blue-500'>Dream Job</span> </h1>
                    <h3 className='mt-5'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</h3>
                    <button className='nav-btn mt-7'>Get Started</button>

                </div>
                <div className="banner-img">
                    <img className='w-full rounded-lg' src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />

                </div>
            </div>
            {/* Banner section ends */}

            {/* Job Category List starts*/}

            <div className='mt-28'>
               <div className='text-center'>
               <h1 className='text-5xl font-semibold'>Job Category List</h1>
                <p className='mt-5 text-lg text-gray-600 font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
               </div>
               <div className='grid md:grid-cols-4 mx-20 gap-5 mt-10 '>
                {
                    loadData.map(data=><ShowData
                    data={data}
                    key={data.id}
                    ></ShowData>)
                }
               </div>
            </div>

            {/* Job Category List ends*/}

            {/* Featured Jobs section start */}
                <div className='mt-36'>
                    <div className='text-center'>
                    <h1 className='text-5xl font-semibold'>
                    Featured Jobs
                    </h1>
                    <p className='text-xl font-light mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className='grid md:grid-cols-2 gap-10 mt-20 md:mx-44 mb-10'>
                        {
                            cardData.slice(0,4).map((cards)=><CardsShow
                            cards={cards}
                            key={cards.id}
                            ></CardsShow>)
                        }
                    </div>
                   <div className='text-center mt-12 mb-20'>
                   
                    <button  className='nav-btn'>Show All Job</button>
                   
                   </div>
                </div>


            {/* Featured Jobs section ends */}

            
        </div>
    );
};

export default Home;