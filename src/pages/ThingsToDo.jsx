import React from 'react';
import Thingtdimg from '../assets/img/thingTodo.jpg'
import Inspried from '../components/Inspired';
import { thingtodoP } from '../data';
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
                            <h1 className='center-h mt-10'>{name}</h1>
                            <p className=' center-p'>{description}</p>
                            <div className=' flex gap-8 justify-center p-28'>

                                {elements.map((el) => {
                                    const { id, name, img } = el;
                                    return (
                                        <div className=' relative h-[390px] w-[370px]'>
                                            <img className=' w-full h-full' src={img}></img>
                                            <div className=' absolute bottom-0 w-full h-12  bg-slate-500 bg-opacity-40 '>

                                                <h1 className=' text-white font-semibold'>{name}</h1>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                    </>
                );
            })}


        </>

    );
};

export default ThingToDo;
