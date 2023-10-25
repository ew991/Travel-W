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
                        <ElementCol>
                            <TextFooter>SIGN UP FOR OUR NEWSLETTER</TextFooter>
                            <TextFooter2>
                                Receive new travel stories from Vietnam once a month in your inbox.
                            </TextFooter2>
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
                    <div className=' mt-6'>
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