import React from 'react';

const TourGallery = ({ images }) => {
    return (
        <div className="border-b-2 py-10 overflow-hidden">

            <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-2 object-cover">
                {images.map((image, index) => {
                    return (
                        <img
                            src={image}
                            alt={image}
                            key={index}
                            className={`h-32 w-full sm:h-52 lg:h-60 items-center cursor-pointer object-top rounded-lg 'border-4 border-gray-400' : ''
                                }`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TourGallery;
