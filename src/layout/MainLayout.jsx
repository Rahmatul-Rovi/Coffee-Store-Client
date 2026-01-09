import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className='min-h-[calc(100vh-300px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;