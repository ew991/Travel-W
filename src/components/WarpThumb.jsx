import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import { warpthumb } from '../data';
// const TextSpotLight = styled.div`
//     position: absolute;
//     font-family: 'Dancing Script', cursive;
//     color: #ffffff;
//     font-size: 80px;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);

//     @media (max-width: 768px) {
//         font-size: 40px; // Thay đổi kích thước font cho màn hình nhỏ hơn 768px
//     }

//     @media (min-width: 769px) and (max-width: 1024px) {
//         font-size: 60px; // Thay đổi kích thước font cho màn hình từ 769px đến 1024px (md)
//     }

//     @media (min-width: 1025px) {
//         font-size: 80px; // Thay đổi kích thước font cho màn hình lớn hơn hoặc bằng 1025px (lg)
//     }
// `;


const WarpThumb = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % warpthumb.length);
    };

    // const prevImage = () => {
    //     setCurrentImage((prev) => (prev - 1 + warpthumb.length) % warpthumb.length);
    // };
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3700); // Thay đổi 5000 thành khoảng thời gian (miligiây) bạn muốn

        return () => clearInterval(interval); // Xóa interval khi component unmount
    }, [currentImage]);

    return (

        <div className=" w-full h-full overflow-hidden mt-10 ">
            <div className='  '>
                <img
                    src={warpthumb[currentImage].srcImg}
                    alt={`Image ${currentImage - 1}`}
                    className="  object-contain h-full w-full "
                />
                {/* <TextSpotLight>{warpthumb[currentImage].description}</TextSpotLight> */}

                {/* <div
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
                </div> */}


                {/* <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center space-x-2">
                    {warpthumb.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full bg-white ${index === currentImage ? 'opacity-100' : 'opacity-50'
                                }`}
                            onClick={() => setCurrentImage(index)}
                        ></div>
                    ))}
                </div> */}
            </div>

        </div>
    );
};

export default WarpThumb;
