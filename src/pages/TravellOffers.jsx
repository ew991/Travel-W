import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SectionIntro from '../components/SectionIntro';
import { offer_do } from '../data';
import { offer_stay } from '../data';
import Offer from '../components/Offer';

const TrvOffer = () => {
    return (
        <section className="section" id="blogs">
            <SectionTitle title="SPECIAL DEALS" />
            <div className="section-center rounded-3xl">
                <SectionIntro
                    title="Stay"
                    intro="Uncover unique promotions on hotels and tours"
                />
                <div className="grid-container ">
                    {offer_stay.map((offer, index) => (
                        <Offer key={index} offer={offer} />
                    ))}
                </div>
            </div>
            {/* <SectionTitle title="SPECIAL DEALS" /> */}
            <div className="section-center rounded-3xl">
                <SectionIntro
                    title="Do"
                    intro="Uncover unique promotions on hotels and tours"
                />
                <div className="grid-container ">
                    {offer_do.map((offer, index) => (
                        <Offer key={index} offer={offer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrvOffer;
