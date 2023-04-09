import React from 'react';

const Home = () => {
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
                    <img className='w-full' src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />

                </div>
            </div>
            {/* Banner section ends */}

            
        </div>
    );
};

export default Home;