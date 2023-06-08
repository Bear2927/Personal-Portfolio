import React from 'react';
import headshot from '../assets/headshot.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-3 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. My name is Barrett Hiltabrand, it's a pleasure to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. I enjoy making user centric applications,
                identifying bugs and streamlining code while using best practices.</p>  
            </div>
            <div>
              <img src={headshot} alt="headshot" className='border-4 border-violet-900 rounded-3xl h-80 shadow-amber-300 shadow-2xl hover:scale-110 duration-500'/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;