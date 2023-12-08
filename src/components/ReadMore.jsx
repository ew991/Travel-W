import React from 'react';
import { thingtodoP } from '../data';

import bgimg from '../assets/img/bg-red-pattern.png';
import styled from 'styled-components';
import Elm2 from './Elm2';

const TextSpotLight = styled.div`
    font-family: 'Dancing Script', cursive;
    color: #ffffff;
    font-size: 80px;
    text-align: center;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);

    @media (max-width: 768px) {
        font-size: 40px; // Thay đổi kích thước font cho màn hình nhỏ hơn 768px
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 60px; // Thay đổi kích thước font cho màn hình từ 769px đến 1024px (md)
    }

    @media (min-width: 1025px) {
        font-size: 80px; // Thay đổi kích thước font cho màn hình lớn hơn hoặc bằng 1025px (lg)
    }
`;


const ReadMore = () => {
    const getRandomElement = (array) => {
        if (Array.isArray(array) && array.length > 0) {
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        } else {
            console.error('Invalid array or empty array provided.');
            return null;
        }
    };

    const getRandomCategoryWithElements = () => {
        // Lấy ngẫu nhiên một danh mục từ thingtodoP
        const randomCategory = getRandomElement(thingtodoP);
        // Lấy ngẫu nhiên một phần tử từ danh mục đã chọn
        const randomElement = getRandomElement(randomCategory?.elements);

        return { category: randomCategory, element: randomElement };
    };

    // Lặp lại quy trình để lấy 3 cặp danh mục và phần tử ngẫu nhiên
    const randomElements = Array.from({ length: 3 }, () => getRandomCategoryWithElements());

    return (
        <>
            <div className=' mt-14  ' style={{ backgroundImage: `url(${bgimg})` }}>
                <TextSpotLight >Read More</TextSpotLight>

                <div className=' -z-20 flex flex-col lg:flex-row gap-8 justify-center p-28'>
                    {randomElements.map(({ category, element }) => (
                        element && (
                            <Elm2
                                key={element.id}
                                elm={element}
                                categoryName={category?.name}
                            />
                        )
                    ))}
                </div>
            </div>
        </>
    );
};
export default ReadMore;