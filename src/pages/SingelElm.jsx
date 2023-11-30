import React from 'react';
import { ThingtodoElm } from '../data';
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
    text-shadow: 2px 2px 2px rgba(0,0,0,.75);
`;

const SingelElm = () => {
    const { id } = useParams();
    const elm = ThingtodoElm.find(p => {
        return p.route === id;
    });
    const { img, name, infor, intro } = elm;


    return (
        <>
            <section className='relative w-full min-h-screen p-10 flex justify-center items-center bg-[#1C315E]'>
                <img className=' img-showup ' src={img} />
            </section>

            <TextSpotLight>{name} </TextSpotLight>

            <section className="section">
                <div className="section-center">

                    <p className=" text-base sm:text-xl italic font-bold">
                        {intro}
                    </p>
                    <article className="article-container">
                        {infor.map((po) => {
                            const { title, description, srcimg } = po;
                            return (
                                <>
                                    <div className='tip-container'>
                                        <h2 className=' text-[#9e0b0f] font-semibold text-xl'>{title}</h2>
                                        {description?.map((desc, index) => (
                                            <p key={index}>{desc}</p>
                                        ))}
                                        {srcimg !== null && <img src={srcimg} />}
                                    </div>
                                </>
                            );
                        })}

                    </article>
                </div>
            </section>

        </>
    );
};
export default SingelElm;