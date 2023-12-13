import React from 'react';
import { Link } from 'react-router-dom';

const Tra = ({ tra }) => {
    const { srcImg, name } = tra;
    return (
        <Link
            to={`/TravelTip/${name}`}
            className={` group  `}
        >
            <div className=' flex flex-col items-center'>

                <img className=' block' alt={name} src={srcImg} />
                <div className="center-p group-hover:text-[#b2910e]">
                    <h4 >
                        {name}
                    </h4>
                </div>
            </div>
        </Link>
    );
};

export default Tra;