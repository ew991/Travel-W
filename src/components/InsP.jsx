import React from 'react';
import { Link } from 'react-router-dom';

const Insp = ({ insp }) => {
    const { srcImg, name } = insp;
    return (
        <Link
            to={`inspired/${name}`}
            className={` group  `}
        >
            <img alt={name} src={srcImg} />
            <div className="center-p group-hover:text-[#b2910e]">
                <h4>{name}</h4>
            </div>
        </Link>
    );
};

export default Insp;