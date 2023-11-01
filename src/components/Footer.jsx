import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
`;
const ElementCol = styled.div`
    display: flex;
    flex-direction: column;
`;
const TextFooter = styled.h1`
    font-weight: 600;
`;
const TextFooter2 = styled.a`

`;
const Footer = () => {
    return (
        <>
            <div className=' pl-10 pr-10'>
                <ElementCol>
                    <FooterDiv>
                        <ElementCol className=' gap-[12px]'>
                            <TextFooter>SIGN UP FOR OUR NEWSLETTER</TextFooter>
                            <TextFooter2>
                                Receive new travel stories from Vietnam once a month in your inbox.
                            </TextFooter2>
                            <input className=" w-[400px] placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your email" type="text" name="search" />
                            <button className='w-[400px]'>Sign Up</button>
                        </ElementCol>
                        <ElementCol>
                            <TextFooter>USEFUL LINKS</TextFooter>
                            <TextFooter2>
                                Receive new travel stories from Vietnam once a month in your inbox.
                            </TextFooter2>
                        </ElementCol><ElementCol>
                            <TextFooter>FOLLOW US ON</TextFooter>
                            <TextFooter2>
                                Receive new travel stories from Vietnam once a month in your inbox.
                            </TextFooter2>
                        </ElementCol>
                    </FooterDiv>
                    <div className=' mt-6 border-y-2'>
                        <FooterDiv>
                            <TextFooter2>© 2016 Official Website Vietnam Tourism</TextFooter2>
                            <TextFooter2>Email: contact@vietnamtourism.gov.vn</TextFooter2>
                            <TextFooter2>Privacy Policy</TextFooter2>
                        </FooterDiv>
                    </div>

                </ElementCol>
            </div>


        </>
    );
};

export default Footer;