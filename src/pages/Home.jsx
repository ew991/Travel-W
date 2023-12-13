import React from 'react';
import HomeVid from '../components/HomeVid';
import InstagramEmbed from '../components/ShareYourStory';
import VidEmbed from '../components/EmbedVid';
import PlacesToGo from './PlacesTogo';
import Promotion from '../components/Promotion';
import Tips from '../components/Tips';
import WarpThumb from '../components/WarpThumb';
import { warpthumb2 } from '../data';
const HomePage = () => {
    return (
        <>
            <HomeVid />
            <PlacesToGo />
            <Promotion />
            <WarpThumb warpthumb={warpthumb2} />

            <Tips />
            {/* <InstagramEmbed /> */}
            {/* <VidEmbed /> */}
        </>
    );
};

export default HomePage;
