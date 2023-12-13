import React from 'react';
import styled from 'styled-components';

const Textnav = styled.a`
    color: #ffffff;
    font-size: 19px;
    letter-spacing: 0.3px;
    font-weight: 500;
    text-shadow: 2px 2px 2px rgba(0,0,0,.75);
    &:hover{
        text-shadow: none;
        color: #227C70;
    }
    cursor: pointer;
`;
const NavLinks = ({ setIsMenuOpen, links }) => {
    return (
        <>
            {links.map((link, index) => (
                <li key={index}>
                    <Textnav
                        href={link.href}
                        title={link.title}
                        aria-label={link.title}
                        // className="nav-link drop-shadow-xl"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.title}
                    </Textnav>
                </li>
            ))}
        </>
    );
};

export default NavLinks;
