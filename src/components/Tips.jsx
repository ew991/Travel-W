import React from 'react';
import Tra from './trvtip';
import { traveltipicon } from '../data';

const Tips = ({ tra }) => {

    return (
        <section className="section" id="tips">
            <div className=''>

                <h1 className='center-h '>TRAVEL TIPS</h1>
                <p className=' center-p'>Read up before you go</p>
                <div className=' flex justify-center items-center'>

                    <div className=' grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 md:grid-cols-2 gap-8 mt-10'>
                        {traveltipicon.map((tra) => (
                            <Tra
                                key={tra.id}
                                tra={tra}

                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Tips;