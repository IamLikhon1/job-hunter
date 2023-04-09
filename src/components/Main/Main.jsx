import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>  
        </div>
    );
};

export default Main;