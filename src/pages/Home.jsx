import React from 'react';
import HomeVid from '../components/HomeVid';
import InstagramEmbed from '../components/ShareYourStory';
import VidEmbed from '../components/EmbedVid';
const HomePage = () => {
    return (
        <>
            <HomeVid />
            {/* <InstagramEmbed /> */}
            <VidEmbed />
        </>
    );
};

export default HomePage;
