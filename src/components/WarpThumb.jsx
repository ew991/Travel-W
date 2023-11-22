import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import anhw1 from "../assets/img/PlanYourTrip/galley/homestay in vietnam.jpg";
import anhw2 from "../assets/img/PlanYourTrip/galley/official vietnam e visa_6.jpg";
import anhw3 from "../assets/img/PlanYourTrip/galley/responsible travel vietnam-5.jpg";
import anhw4 from "../assets/img/PlanYourTrip/galley/Vietnam local culture guide-10.jpg";
import anhw5 from "../assets/img/PlanYourTrip/galley/Vietnam Tourism - plan your trip.jpg";
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
    const dataimg = [
        { id: 1, srcImg: anhw1, name: 'Item 1', description: [`What are the Vietnamese like?`] },
        { id: 2, srcImg: anhw2, name: 'Item 2', description: ['An guide to e-Visas in Vietnam',] },
        { id: 3, srcImg: anhw3, name: 'Item 3', description: ['How to travel responsibly in Vietnam'] },
        { id: 4, srcImg: anhw4, name: 'Item 4', description: [`Beginner's guide To Vietnam Now`] },
        { id: 5, srcImg: anhw5, name: 'Item 5', description: [`5 reasons to try as homestay in Vietnam`] },


        // Thêm các đối tượng khác nếu cần
    ];
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % dataimg.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + dataimg.length) % dataimg.length);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3700); // Thay đổi 5000 thành khoảng thời gian (miligiây) bạn muốn

        return () => clearInterval(interval); // Xóa interval khi component unmount
    }, [currentImage]);

    return (

        <div className=" relative overflow-hidden mt-10 ">
            <div className=''>
                <img
                    src={dataimg[currentImage].srcImg}
                    alt={`Image ${currentImage + 1}`}
                    className="object-contain h-full w-full "
                />
            </div>
            <TextSpotLight>{dataimg[currentImage].description}</TextSpotLight>

            <div
                className=" absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between cursor-pointer"
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
                {dataimg.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full bg-white ${index === currentImage ? 'opacity-100' : 'opacity-50'
                            }`}
                        onClick={() => setCurrentImage(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default WarpThumb;
