import React from 'react';
import Thingtdimg from '../assets/img/thingTodo.jpg'
import Inspried from '../components/Inspired';
import { thingtodoP } from '../data';
import Elm from '../components/ThingtodoElm';
const ThingToDo = () => {
    return (

        <>
            <section className='relative w-full min-h-screen p-10 flex justify-center items-center bg-[#1C315E]'>
                <img className=' img-showup  ' src={Thingtdimg} />
            </section>
            <Inspried />
            {thingtodoP.map((pl) => {
                const { id, name, description, srcImg, elements } = pl;
                return (
                    <>
                        <div className=' mt-14'>
                            <img className=' w-full h-full object-cover' src={srcImg}></img>
                            <div className=' section-center'>

                                <h1 className='center-h mt-10'>{name}</h1>
                                <p className=' text-2xl font-normal mt-2 '>{description}</p>
                            </div>
                            <div className=' flex flex-col lg:flex-row gap-8 justify-center p-28'>
                                {elements.map((elm) => (
                                    <Elm
                                        key={elm.id}
                                        elm={elm}

                                    />
                                ))}
                            </div>

                        </div>

                    </>
                );
            })}


        </>

    );
};

export default ThingToDo;
