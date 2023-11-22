import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopBtn';
const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <ScrollToTopButton />
            {/* <Footer /> */}
        </>
    );
};

export default SharedLayout;