import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className=' md:flex justify-around mt-10 items-center'>
            <Link to='/'><h1 className=' text-3xl font-bold '>Work<span className='text-blue-500'>J<span className='text-red-500'>e</span>t</span></h1></Link>
            <div className=''>
            <Link className='mx-6 text-lg font-medium' to='/'>Home</Link>
            <Link className='mx-6 text-lg font-medium' to='/statistics'>Statistics</Link>
            <Link className='mx-6 text-lg font-medium' to='/applied'>Applied Jobs</Link>
            <Link className='mx-6 text-lg font-medium' to='/blog'>Blog</Link>
            </div>
            <button className='nav-btn'>Star Applying</button>
            
        </div>
    );
};

export default Header;