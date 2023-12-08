import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopBtn';
import ReadMore from '../components/ReadMore';
const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <ScrollToTopButton />
            <ReadMore />
            {/* <Footer /> */}
        </>
    );
};

export default SharedLayout;