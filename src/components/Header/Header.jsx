import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-around mt-10 items-center'>
            <h1 className='text-3xl font-bold '>AL <span className='text-blue-500'>Hubs</span></h1>
            <div>
            <Link className='mx-8 text-lg font-medium' to='/'>Home</Link>
            <Link className='mx-8 text-lg font-medium' to='/statistics'>Statistics</Link>
            <Link className='mx-8 text-lg font-medium' to='/applied'>Applied Jobs</Link>
            <Link className='mx-8 text-lg font-medium' to='/blog'>Blog</Link>
            </div>
            <button className='nav-btn'>Star Applying</button>
            
        </div>
    );
};

export default Header;