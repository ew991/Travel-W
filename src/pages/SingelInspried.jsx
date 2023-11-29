import React from 'react';
import { innspried } from '../data';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const TextSpotLight = styled.div`
    position: absolute;
    font-family: 'Dancing Script', cursive;
    color: #ffffff;
    font-size: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SingelInspired = () => {
    const { id } = useParams();
    const insp = innspried.find(p => {
        return p.name === id;
    });
    const { name, srcImg, description } = insp;


    return (
        <>
            <section className='relative w-full min-h-screen p-10 flex justify-center items-center bg-[#1C315E]'>
                <img className=' img-showup ' src={srcImg} />
            </section>

            <TextSpotLight>{name} </TextSpotLight>

            <section className="section">
                <div className="section-center">
                    <article className="article-container">
                        <h2 className="text-center text-3xl sm:text-4xl italic font-bold">
                            {name}
                        </h2>
                        <p>{description}</p>

                    </article>
                </div>
            </section>

        </>
    );
};
export default SingelInspired;