import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { warpthumb } from '../data';
const TextSpotLight = styled.div`
    text-align: center;
    position: absolute;
    font-family: 'Dancing Script', cursive;
    color: #ffffff;
    font-size: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


const WarpThumb = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % warpthumb.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + warpthumb.length) % warpthumb.length);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            prevImage();
        }, 3700); // Thay đổi 5000 thành khoảng thời gian (miligiây) bạn muốn

        return () => clearInterval(interval); // Xóa interval khi component unmount
    }, [currentImage]);

    return (

        <div className=" w-full h-full overflow-hidden mt-10 ">
            <div className=' relative '>
                <img
                    src={warpthumb[currentImage].srcImg}
                    alt={`Image ${currentImage - 1}`}
                    className="  object-contain h-full w-full "
                />
                <TextSpotLight>{warpthumb[currentImage].description}</TextSpotLight>

                <div
                    className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between cursor-pointer"
                    onClick={nextImage}
                >
                    <div className="ml-4">
                        <span className="text-white text-5xl">&lt;</span>
                    </div>
                    <div className="mr-4">
                        <span className="text-white text-5xl">&gt;</span>
                    </div>
                </div>
                <div
                    className=" absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between cursor-pointer"
                    onClick={prevImage}
                >
                    <div className="ml-4">
                        <span className="text-white text-5xl">&lt;</span>
                    </div>
                    <div className="mr-4">
                        <span className="text-white text-5xl">&gt;</span>
                    </div>
                </div>


                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center space-x-2">
                    {warpthumb.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full bg-white ${index === currentImage ? 'opacity-100' : 'opacity-50'
                                }`}
                            onClick={() => setCurrentImage(index)}
                        ></div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default WarpThumb;
