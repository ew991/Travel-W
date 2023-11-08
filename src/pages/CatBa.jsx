import React from 'react';
import CatBa1 from '../assets/img/PlaceImg/CatBa/CatBa2-1648981692-9662-1648981737.jpg';
import styled from 'styled-components';

const TextSpotLight = styled.div`
    position: relative;
    top: 200px;
    font-family: 'Dancing Script', cursive;
    color: #ffffff;
    font-size: 80px;
    text-align: center;
`;
const Img = styled.img`
    position: absolute;
    /* max-height: 700px; */
`;
const CatBa = () => {
    return (
        <>
            <Img src={CatBa1} />
            <TextSpotLight>Cát Bà</TextSpotLight>
        </>
    );
};

export default CatBa;
