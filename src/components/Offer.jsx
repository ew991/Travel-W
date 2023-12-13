import React from 'react';
// import { formatDate } from '../utils/helpers';

const Offer = ({ offer }) => {
    const { imageSrc, title, description, source, date, timeToRead, url } = offer;
    return (
        <section className={`group bg-blue-100 shadow-lg rounded-lg `}>
            <article className="rounded-2xl ">
                <div className="relative h-60  ">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-t-lg"
                    />
                </div>
                <div className="p-4 flex-col ">
                    <h3 className="mt-4 text-2xl font-bold text-[#a5190e]">{title}</h3>
                    <p className="my-6 ">
                        {description.substring(0, 200)}...
                    </p>
                    <a
                        href={url}
                        className="read-more text-[#1588fc] hover:text-[#1534fc]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Details and booking
                    </a>
                    <div className="flex items-center mt-4">
                        <div href="#" className="block relative">
                            <img
                                alt={title}
                                src={imageSrc}
                                className="mx-auto object-cover rounded-full h-10 w-10 "
                            />
                        </div>
                        <div className="flex flex-col justify-between ml-4 text-sm">
                            <p className="text-gray-800 font-semibold">{source}</p>
                            <p className="text-gray-600">
                                {/* {formatDate(date)} - {timeToRead} minutes read{' '} */}
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Offer;
