import React from 'react';
import { thingtodoP } from '../data';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Elm2 from '../components/Elm2';
import bgimg from '../assets/img/bg-red-pattern.png';

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

const SingelInspired = () => {
    const { id } = useParams();
    const insp = thingtodoP.find(p => {
        return p.namein === id;
    });
    const { namein, srcImg, description2, elements, video } = insp;


    return (
        <>
            <section className='relative w-full min-h-screen p-10 flex justify-center items-center bg-[#1C315E]'>
                <img className=' img-showup ' src={srcImg} />
            </section>

            <TextSpotLight>{namein} </TextSpotLight>

            <section className="section">
                <div className="section-center">
                    <article className="article-container">
                        <p>{description2}</p>
                        <div content='' className='' style={{ backgroundImage: `url(${bgimg})` }}>

                            <h2 className=" mt-20 text-center text-3xl sm:text-4xl italic font-bold text-white" >
                                {namein}
                            </h2>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-8 items-center justify-center p-0 md:p-12 lg:p-28'>
                            {elements.map((elm) => (
                                <Elm2
                                    key={elm.id}
                                    elm={elm}

                                />
                            ))}
                        </div>


                    </article>
                </div>
            </section>
            <video
                controls=""
                muted
                autoPlay={'autoplay'}
                loop
                className=" w-full h-full object-cover  z-30 "
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag. I suggest you upgrade your
                browser.
            </video>

        </>
    );
};
export default SingelInspired;