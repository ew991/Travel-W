import React from 'react';
import HanoiT from '../assets/img/PlaceImg/Hanoi/Hanoi.jpg';
import styled from 'styled-components';
const TextSpotLight = styled.div`
    position: relative;
    top: 200px;
    font-family: 'Dancing Script', cursive;
    color: #ffffff;
    font-size: 80px;
    text-align: center;
`;

const HaNoi = () => {
    return (
        <>
            <img className=' img-showup' src={HanoiT} />
            <TextSpotLight>Hà Nội </TextSpotLight>
        </>
    );
};

export default HaNoi;
