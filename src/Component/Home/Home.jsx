import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='h-screen'>
            <Navbar></Navbar>
            <div className='h-[calc(100vh-165px)] '>
                <Outlet></Outlet>
            </div>
            <div className=''>
                <footer className="footer footer-center p-10 bg-base-200 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Imrul Hassan Emon</p>
                </div>
            </footer>
            </div>
        </div>
    );
};

export default Home;