import React, { useState, useRef } from 'react';
import img from '../assets/img/he-thong-duong-sat-viet-nam.jpg'
import { practicalities } from '../data';
import InforGrapic from '../components/InforGrapics';
const PlanYourTrip = () => {

    const [openPopupId, setOpenPopupId] = useState(null);
    const myElementRefs = useRef([]);

    const openPopup = (popupId) => {
        setOpenPopupId(popupId);
        console.log('id la:', popupId)
    };

    const closePopup = () => {
        setOpenPopupId(null);
    };

    const handleContainerClick = (event) => {
        if (event.target === event.currentTarget) {
            // Nếu click vào vùng overlay bên ngoài popup, đóng popup
            closePopup();
        }
    };

    return (
        <>
            <section className='relative w-full min-h-screen p-10 flex justify-center items-center bg-[#1C315E]'>
                <img className=' img-showup ' src={img} />
            </section>
            <div className=' '>

                <h1 className='center-h '>TRAVEL TIPS</h1>
                <p className=' center-p'>Read up before you go</p>
            </div>
            <div className=''>

                <h1 className='center-h '>PRACTICALITIES</h1>
                <p className=' center-p'>Get ready for your visit</p>
                <div className=' flex justify-center items-center'>

                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {practicalities.map((pra) => {
                            const { id, name, description, imageSrc } = pra;
                            const elementRef = React.createRef();
                            myElementRefs.current[id] = elementRef;
                            return (
                                <div ref={elementRef} onClick={() => openPopup(id)} className='w-[265px] h-[290px] bg-slate-300 p-2' key={id}>
                                    <img src={imageSrc}></img>
                                    <h1 className='text-[15px] font-bold'>{name}</h1>
                                    <p className='text-[14px] mt-[10px]'>{description}</p>

                                </div>

                            );
                        })}

                    </div>

                </div>
                {openPopupId && (


                    <div
                        className="fixed top-0 left-0 w-full h-full overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center "
                        onClick={handleContainerClick}
                    >
                        <div className=" mt-[50px] rounded-lg">
                            {/* <button onClick={closePopup} className="text-gray-700 hover:text-gray-900 text-xl">
                                &times;
                            </button> */}
                            {practicalities.map((pop) => {
                                if (pop.id === openPopupId) {
                                    const { id, name, descriptions, imageSrc } = pop;
                                    return (
                                        <div className='p-2 pb-[50px] bg-slate-300 max-w-[675px]' key={id}>
                                            <img src={imageSrc} alt={name} />
                                            <h1 className='text-[19px] font-bold'>{name}</h1>

                                            {descriptions?.map((desc, index) => (
                                                <p className=' mt-4 max-w-[675px]' key={index}>{desc}</p>
                                            ))}
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>

                )}
            </div>
            <InforGrapic />

        </>
    );
};

export default PlanYourTrip;