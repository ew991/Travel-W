import React from 'react';
import HanoiT from '../assets/img/PlaceImg/Hanoi/Hanoi.jpg';
import styled from 'styled-components';
import { placesToGo } from '../data';


const TextSpotLight = styled.div`
    position: relative;
    top: 200px;
    font-family: 'Dancing Script', cursive;
    color: #000000;
    font-size: 80px;
    text-align: center;
`;
const Img = styled.img`
    position: absolute;
    /* max-height: 700px; */
`;

const HaNoi = () => {
    const place = placesToGo.find(p => {
        return p.name === 'Hanoi';
    });
    const { name, places } = place;
    return (
        <>
            <Img src={HanoiT} />
            <TextSpotLight>Hà Nội</TextSpotLight>
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
                            <p className=' text-[#222222]' key={index}>{desc}</p>
                        ))}
                        {images.map(img => (
                            <img key={img.id} src={img.imageSrc} alt={name}></img>
                        ))}
                    </div>
                );
            })}
        </>
    );
};

export default HaNoi;
