import React from 'react';
import { innspried } from '../data';
import Insp from './InsP';
const Inspried = () => {
    return (

        <>
            <div>
                <div className='section-center'>

                    <h1 className='center-h '> GET INSPIRED

                    </h1>
                    <p className=' text-2xl font-normal mt-2'>
                        There are so many insightful tours, amazing dishes and fun activities in Vietnam, you’ll never run out of interesting things to do. Here are some handpicked ideas to get you started.
                    </p>
                </div>
                <div className=' flex justify-center items-center'>
                    <div className=''>
                        <div className=' grid grid-cols-1 lg:grid-cols-5   gap-8 mt-10'>
                            {innspried.map((insp) => (
                                <Insp
                                    key={insp.id}
                                    insp={insp}

                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
};

export default Inspried;