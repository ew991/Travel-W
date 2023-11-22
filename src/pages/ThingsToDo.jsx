import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { placesToGo } from '../data';
import PlaceToGo from '../components/PlaceTG';
import SectionIntro from '../components/SectionIntro';
import Thingtdimg from '../assets/img/thingTodo.jpg'

const ThingToDo = () => {
    return (

        <>
            <section className='relative w-full min-h-screen p-10 flex justify-center items-center bg-[#1C315E]'>
                <img className=' img-showup ' src={Thingtdimg} />
            </section>

        </>

    );
};

export default ThingToDo;
