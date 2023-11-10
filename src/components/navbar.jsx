import React, { useState, useEffect } from 'react';
import SearchIcon from '../assets/img/SearchIcon.png'
import Logo from '../assets/img/VnNortravels-logos.jpeg'
import styled from 'styled-components';


const Textnav = styled.a`
    color: #ffffff;
    font-size: 19px;
    letter-spacing: 0.3px;
    font-weight: 500;
    &:hover{
        color: #227C70;
    }
    cursor: pointer;
`;
const DivImg = styled.div`

`;
const Navbar = () => {
    return (
        <>
            <div className='s  absolute z-[35] w-full flex items-center justify-center gap-[40px] '>
                <DivImg >
                    <a href='/'>
                        <img src={Logo} className='w-[100px] h-[110px] rounded-[40px] border-none ' />
                    </a>
                </DivImg >

                <Textnav href='/PlaceToGo'>Places to go</Textnav>
                <Textnav href='/ThingToDo'>Things to do</Textnav>
                <Textnav href='/PlanYourTrip'> Plan your trip</Textnav>
                <Textnav>Travell offers</Textnav>
                <DivImg>
                    <img src={SearchIcon} />
                </DivImg>
            </div >
        </>
    );
};

export default Navbar;
