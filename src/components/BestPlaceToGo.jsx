import React from 'react';
import { placesToGo } from '../data';
import { useParams } from 'react-router-dom';
import TourGallery from './TourGallery';
import styled from 'styled-components';
import ShareButtons from './Share';
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
const BestPlaceTG = () => {
    const { id } = useParams();
    const place = placesToGo.find(p => {
        return p.name === id;
    });
    const { name, imageSrc, places, description, intro, should_do, diffr } = place;


    return (
        <>
            <section className='relative w-full min-h-screen p-10 flex justify-center items-center bg-[#1C315E]'>
                <img className=' img-showup ' src={imageSrc} />
            </section>

            <TextSpotLight>{name} </TextSpotLight>
            <section className="section">
                <div className="section-center">
                    <article className="article-container">
                        <ShareButtons></ShareButtons>
                        <h2 className="text-center text-3xl sm:text-4xl italic font-bold">
                            {name}
                        </h2>
                        <p>{description}</p>

                        {intro.map((pl) => {
                            const { id, name, description, images } = pl;
                            return (
                                <div className="tip-container" key={id}>
                                    <h3 className="tip-title text-center">
                                        {name}
                                    </h3>
                                    {description?.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                    <TourGallery images={images} />
                                    {/* {images.map(img => (
                                        <img key={img.id} src={img.imageSrc} alt={name}></img>
                                    ))} */}
                                </div>
                            );
                        })}

                        <h3 className="text-center text-xl sm:text-2xl mt-2">
                            Best places to visit in {name}
                        </h3>

                        {places.map((pl) => {
                            const { id, name, description, images } = pl;
                            return (
                                <div className="tip-container" key={id}>
                                    <h3 className="tip-title">
                                        {name}
                                    </h3>
                                    {description?.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                    <div className=' grid grid-flow-col gap-4 auto-col-max hover:auto-col-min'>

                                        {images.map(img => (
                                            <img className=' max-w-screen' key={img.id} src={img.imageSrc} alt={name}></img>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                        {should_do.map((pl) => {
                            const { id, name, description, images } = pl;
                            return (
                                <div className="tip-container" key={id}>
                                    <h3 className="tip-title text-center">
                                        {name}
                                    </h3>
                                    {description?.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                    <TourGallery images={images} />
                                </div>
                            );
                        })}
                        {diffr.map((pl, index) => {
                            const { id, name, description, eat_buy } = pl;
                            return (
                                <>
                                    <div className="tip-container" key={id}>
                                        <h3 className="tip-title text-center">
                                            {name}
                                        </h3>
                                        {description?.map((desc, index) => (
                                            <p key={index}>{desc}</p>
                                        ))}

                                        {eat_buy?.map((dl, index) => {
                                            const { id, name, description, images } = dl;
                                            return (
                                                <div className="tip-container" key={id}>
                                                    <h3 className="tip-title">
                                                        {name}
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
export default BestPlaceTG;