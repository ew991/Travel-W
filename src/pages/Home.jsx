import React from 'react';
import Navbar from '../components/navbar';
import HomeVid from '../components/HomeVid';
import Footer from '../components/Footer';
import InstagramEmbed from '../components/ShareYourStory';
const HomePage = () => {
    return (
        <>
            <Navbar />
            <HomeVid />
            <Footer />
            <InstagramEmbed />
        </>
    );
};

export default HomePage;
