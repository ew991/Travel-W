// SiteMap.js
import React from 'react';
import styled from 'styled-components';
import img from '../assets/img/Hm/pexels-foc-foodoncam-58597.jpg';

const TextSpotLight = styled.div`
  position: absolute;
  font-family: 'Dancing Script', cursive;
  color: #ffffff;
  font-size: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 60px;
  }

  @media (min-width: 1025px) {
    font-size: 80px;
  }
`;

const PageLink = ({ title, url, textColor }) => (
    <li>
        <a href={url} className={`text-${textColor || 'red-800'} hover:underline`}>
            {title}
        </a>
    </li>
);

const SubPageList = ({ childLinks, textColor }) => {
    if (!childLinks || childLinks.length === 0) {
        return null;
    }

    return (
        <ul className="list-disc pl-8">
            {childLinks.map((childLink, index) => (
                <React.Fragment key={index}>
                    <PageLink title={childLink.title} url={childLink.url} textColor={textColor} />
                    <SubPageList childLinks={childLink.child_link} textColor={textColor} />
                </React.Fragment>
            ))}
        </ul>
    );
};

const SiteMap = () => {
    const pages = [
        { title: 'HOME', url: '/', child_link: [] },
        {
            title: 'PLACES TO GO', url: '/places-to-go',
            child_link: [
                { title: 'Hanoi', url: '/places-to-go/hanoi' },
                { title: 'Cat Ba', url: '/places-to-go/cat-ba' },
                { title: 'CoTo Island', url: '/places-to-go/coto-island' },
                { title: 'Ha Giang', url: '/places-to-go/ha-giang' },
                { title: 'Ha Long', url: '/places-to-go/ha-long' },
                { title: 'Moc Chau', url: '/places-to-go/moc-chau' },
                { title: 'Sa Pa', url: '/places-to-go/sa-pa' },
                { title: 'Ninh Binh', url: '/places-to-go/ninh-binh' },
            ]
        },
        {
            title: 'THINGS TO DO', url: '/things-to-do',
            child_link: [
                { title: 'Food', url: '/things-to-do/activity-1' },
                { title: 'Nature', url: '/things-to-do/activity-2' },
                { title: 'Culture', url: '/things-to-do/activity-2' },
                { title: 'Cities', url: '/things-to-do/activity-2' },
                { title: 'Beaches', url: '/things-to-do/activity-2' },
            ]
        },
        {
            title: 'PLAN YOUR TRIP', url: '/plan-your-trip',
            child_link: [
                { title: 'Visa Requirements', url: '/plan-your-trip/location-1' },
                { title: 'E-visa Applications', url: '/plan-your-trip/location-2' },
                { title: 'Getting to Vietnam', url: '/plan-your-trip/location-2' },
                { title: 'Getting Around Vietnam', url: '/plan-your-trip/location-2' },
                { title: 'Health and Safety', url: '/plan-your-trip/location-2' },
                { title: 'Vietnamese Phrases', url: '/plan-your-trip/location-2' },
                { title: 'View all travel tips', url: '/plan-your-trip/location-2' },
                {
                    title: 'ITINERARIES', url: '/plan-your-trip/location-2',
                    child_link: [
                        { title: 'Adventure Trails', url: '/plan-your-trip/location-1' },
                        { title: 'Best Heritage Sites', url: '/plan-your-trip/location-2' },
                        { title: 'Getting to Vietnam', url: '/plan-your-trip/location-2' },
                        { title: 'Coast and Islands', url: '/plan-your-trip/location-2' },
                        { title: `Couples' Retreat`, url: '/plan-your-trip/location-2' },
                        { title: 'Green Getaway', url: '/plan-your-trip/location-2' },
                        { title: 'Family Vacation', url: '/plan-your-trip/location-2' },

                    ]
                },
            ]
        },
        {
            title: 'USEFUL LINKS', url: '/useful-links',
            child_link: [
                { title: 'Site Map', url: '/useful-links/link-1' },
                // { title: 'Link 2', url: '/useful-links/link-2' },
            ]
        },
        {
            title: 'TRAVEL OFFERS', url: '/travel-offers',
        },
        {
            title: 'TERMS & CONDITIONS', url: '/travel-offers',
        },
        {
            title: 'PRIVACY POLICY', url: '/travel-offers',
        },
    ];

    return (
        <>
            <section className='relative w-full min-h-screen p-10 flex justify-center items-center bg-[#1C315E]'>
                <img className=' img-showup ' src={img} alt="Background" />
            </section>

            <TextSpotLight>Site Map </TextSpotLight>

            <section className="section">
                <div className="flex flex-col items-center  mx-auto p-8">
                    <h1 className="text-3xl font-bold mb-4">Site Map</h1>
                    <ul className="grid grid-cols-2 pl-4">
                        {pages.map((page, index) => (
                            <div key={index}>
                                <PageLink title={page.title} url={page.url} />
                                {page.child_link && (
                                    <SubPageList childLinks={page.child_link} textColor={page.title === 'ITINERARIES' ? 'yellow' : 'blue-800'} />
                                )}
                            </div>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default SiteMap;




const mainPages = [
    { title: 'HOME', url: '/', child_link: [] },
    {
        title: 'PLACES TO GO', url: '/places-to-go',
        child_link: [
            { title: 'Hanoi', url: '/places-to-go/hanoi' },
            { title: 'Cat Ba', url: '/places-to-go/cat-ba' },
            { title: 'CoTo Island', url: '/places-to-go/coto-island' },
            { title: 'Ha Giang', url: '/places-to-go/ha-giang' },
            { title: 'Ha Long', url: '/places-to-go/ha-long' },
            { title: 'Moc Chau', url: '/places-to-go/moc-chau' },
            { title: 'Sa Pa', url: '/places-to-go/sa-pa' },
            { title: 'Ninh Binh', url: '/places-to-go/ninh-binh' },
        ]
    },
    {
        title: 'THINGS TO DO', url: '/things-to-do',
        child_link: [
            { title: 'Food', url: '/things-to-do/activity-1' },
            { title: 'Nature', url: '/things-to-do/activity-2' },
            { title: 'Culture', url: '/things-to-do/activity-2' },
            { title: 'Cities', url: '/things-to-do/activity-2' },
            { title: 'Beaches', url: '/things-to-do/activity-2' },
        ]
    },
    {
        title: 'PLAN YOUR TRIP', url: '/plan-your-trip',
        child_link: [
            { title: 'Visa Requirements', url: '/plan-your-trip/location-1' },
            { title: 'E-visa Applications', url: '/plan-your-trip/location-2' },
            { title: 'Getting to Vietnam', url: '/plan-your-trip/location-2' },
            { title: 'Getting Around Vietnam', url: '/plan-your-trip/location-2' },
            { title: 'Health and Safety', url: '/plan-your-trip/location-2' },
            { title: 'Vietnamese Phrases', url: '/plan-your-trip/location-2' },
            { title: 'View all travel tips', url: '/plan-your-trip/location-2' },
            {
                title: 'ITINERARIES', url: '/plan-your-trip/location-2',
                child_link: [
                    { title: 'Adventure Trails', url: '/plan-your-trip/location-1' },
                    { title: 'Best Heritage Sites', url: '/plan-your-trip/location-2' },
                    { title: 'Getting to Vietnam', url: '/plan-your-trip/location-2' },
                    { title: 'Coast and Islands', url: '/plan-your-trip/location-2' },
                    { title: `Couples' Retreat`, url: '/plan-your-trip/location-2' },
                    { title: 'Green Getaway', url: '/plan-your-trip/location-2' },
                    { title: 'Family Vacation', url: '/plan-your-trip/location-2' },

                ]
            },
        ]
    },
    {
        title: 'USEFUL LINKS', url: '/useful-links',
        child_link: [
            { title: 'Site Map', url: '/useful-links/link-1' },
            // { title: 'Link 2', url: '/useful-links/link-2' },
        ]
    },
    {
        title: 'TRAVEL OFFERS', url: '/travel-offers',
    },
    {
        title: 'TERMS & CONDITIONS', url: '/travel-offers',
    },
    {
        title: 'PRIVACY POLICY', url: '/travel-offers',
    },
];