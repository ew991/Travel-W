import img from '../assets/img/PlanYourTrip/itineraries/Vietnam itineraries_0.jpg'
import { Itinerariess } from '../data';
import InforGrapic from '../components/InforGrapics';
import styled from 'styled-components';
import { useState } from 'react';
import video6 from '../assets/videos/video (1080p).mp4';
import InforFood from '../components/InforFood';
const pdfUrl = [
    'itineraries/pdf/Heritage_Sites_Vietnam.pdf',
    'itineraries/pdf/Adventure_Trails_Vietnam.pdf',
    'itineraries/pdf/Couples_Retreat_Vietnam.pdf',
    'itineraries/pdf/Coast_Islands_Vietnam.pdf',
    'itineraries/pdf/Family_Itinerary_Vietnam.pdf',
    'itineraries/pdf/Green_Getaway_Vietnam.pdf',

];
const Itineraries = () => {



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
        font-size: 40px; // Thay đổi kích thước font cho màn hình nhỏ hơn 768px
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 60px; // Thay đổi kích thước font cho màn hình từ 769px đến 1024px (md)
    }

    @media (min-width: 1025px) {
        font-size: 80px; // Thay đổi kích thước font cho màn hình lớn hơn hoặc bằng 1025px (lg)
    }
`;
    return (
        <>
            <section className='relative w-full min-h-screen p-10 flex justify-center items-center bg-[#1C315E]'>
                <img className=' img-showup ' src={img} />
            </section>
            <TextSpotLight>Vietnam itineraries </TextSpotLight>
            <div className=''>
                <h1 className='center-h '>YOUR DREAM TRIP</h1>
                <p className=' center-p'>One of the great pleasures of visiting Vietnam is choosing where to go. Destinations here can be dramatically diverse, allowing the opportunity to mix and match and create the holiday you desire. Whether you’re going for islands or highlands, riverfront towns or ancient ruins, tropical rainforests or urban jungles -- or some combination of the above -- there’s always more to see in Vietnam. Get help with planning your trip in the curated itineraries below.</p>
                <div className=' flex justify-center items-center mt-20'>

                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {Itinerariess.map((pra) => {
                            const { id, name, description, imageSrc } = pra;
                            const pdfIndex = id - 1; // Sử dụng id để xác định vị trí của pdfUrl tương ứng
                            return (
                                <div className='  w-[365px] h-[290px] bg-slate-300 p-2' key={id} >
                                    <div className=' h-[180px] overflow-hidden'>
                                        <img className='effect-tranf object-cover' src={imageSrc}></img>
                                    </div>
                                    <h1 className='text-[15px] font-bold'>{name}</h1>
                                    <p className='text-[14px] mt-[10px]'>{description}</p>

                                </div>

                            );
                        })}

                    </div>

                </div>
                <video
                    controls=""
                    muted
                    autoPlay={'autoplay'}
                    loop
                    className=" w-full h-full object-cover mt-20 z-30 "
                >
                    <source src={video6} type="video/mp4" />
                    Your browser does not support the video tag. I suggest you upgrade your
                    browser.
                </video>
            </div>

            <InforFood />


        </>
    );
};

export default Itineraries;