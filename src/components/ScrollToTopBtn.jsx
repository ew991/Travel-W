import React from 'react';
import scolltotopIcon from '../assets/img/Icon/icons8-scroll-up-48.png'

const ScrollToTopButton = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {(
                <div className=" fixed bottom-5 right-5" onClick={scrollTop}>
                    <img src={scolltotopIcon} ></img>
                </div>
            )}
        </div>
    );
};

export default ScrollToTopButton;
