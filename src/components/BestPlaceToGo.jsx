import React from 'react';
import { placesToGo } from '../data';
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
const BestPlaceTG = () => {
    const { id } = useParams();
    const place = placesToGo.find(p => {
        return p.name === id;
    });
    const { name, imageSrc, places } = place;
    return (
        <>
            <section className='relative w-full min-h-screen p-10 flex justify-center items-center bg-[#1C315E]'>
                <img className=' img-showup ' src={imageSrc} />
            </section>

            <TextSpotLight>{name} </TextSpotLight>

            <section className="section">
                <div className="section-center">
                    <article className="article-container">
                        <h2 className="text-center text-3xl sm:text-4xl italic font-bold">
                            {name}
                        </h2>
                        <h3 className="text-center text-xl sm:text-2xl mt-2">
                            Best places to visit in {name}
                        </h3>
                        {places.map((pl, index) => {
                            const { id, name, description, images } = pl;
                            return (
                                <div className="tip-container" key={id}>
                                    <h3 className="tip-title">
                                        {index + 1}- {name}
                                    </h3>
                                    {description?.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                    {images.map(img => (
                                        <img key={img.id} src={img.imageSrc} alt={name}></img>
                                    ))}
                                </div>
                            );
                        })}
                    </article>
                </div>
            </section>

        </>
    );
};
export default BestPlaceTG;