import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default SharedLayout;