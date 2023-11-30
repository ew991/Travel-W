import React from 'react';
import { Link } from 'react-router-dom';

const Elm = ({ elm }) => {
    const { img, route, name } = elm;
    return (
        <Link
            to={`Elm/${route}`}
            className={` group  `}
        >
            <div className=' relative h-[390px] w-[370px] border-double border-4 border-black'>
                <img className=' w-full h-full' src={img}></img>
                <div className=' absolute bottom-0 w-full h-12  bg-slate-500 bg-opacity-40 '>

                    <h1 className=' text-white font-semibold'>{name}</h1>
                </div>
            </div>
        </Link>
    );
};

export default Elm;