import React, { useState, useRef } from 'react';
import { inforfood } from '../data';
const InforFood = () => {


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
        <div className=''>
            <h1 className='center-h '>EXPERIENCES</h1>
            <p className=' center-p'>See outstanding travel products from our partners</p>
            <div className='flex justify-center items-center '>

                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
                    {inforfood.map((pra) => {
                        const { id, imagesSrc } = pra;
                        const elementRef = React.createRef();
                        myElementRefs.current[id] = elementRef;
                        return (
                            <div ref={elementRef} onClick={() => openPopup(id)} className=' bg-slate-300 p-2 ' key={id}>
                                <img className='' src={imagesSrc}></img>


                            </div>

                        );
                    })}
                </div>
            </div>

            {openPopupId && (


                <div
                    className="fixed top-0 z-50 left-0 w-full h-full overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center "
                    onClick={handleContainerClick}
                >
                    <div className=" mt-[50px] rounded-lg">
                        {/* <button onClick={closePopup} className="text-gray-700 hover:text-gray-900 text-xl">
            &times;
        </button> */}
                        {inforfood.map((pop) => {
                            if (pop.id === openPopupId) {
                                const { id, images } = pop;
                                return (
                                    <div className='p-2  bg-slate-300 max-w-[675px]' key={id}>
                                        <img src={images} />

                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

            )}

        </div>
    );
};

export default InforFood;
