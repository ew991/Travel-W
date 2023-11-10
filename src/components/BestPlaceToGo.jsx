import React from 'react';
import { placesToGo } from '../data';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const TextSpotLight = styled.div`
    position: relative;
    top: 200px;
    font-family: 'Dancing Script', cursive;
    color: #ffffff;
    font-size: 80px;
    text-align: center;
`;
const BestPlaceTG = () => {
    const { id } = useParams();
    const place = placesToGo.find(p => {
        return p.name === id;
    });
    const { name, imageSrc, places } = place;
    return (
        <>
            <img className=' img-showup' src={imageSrc} />
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