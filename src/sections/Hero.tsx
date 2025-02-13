import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import Pic from '@/assets/images/pic.png';

export const HeroSection = () => {
  return (
    <div className='py-24 md:py-24'>
      <div className="container">
        <div className='flex flex-col items-center'>
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          <div>
            <Image
              src={memojiImage}
              className='size-[200px]'
              alt="Person peeking from behind laptop"
            />
          </div>
          <div className="flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Image 
            src={Pic} 
            className='size-[200px]' 
            alt="Person peeking from behind laptop"
          /> 
          </div>
          </div>
        <div className='mt-4 bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full'></div>
          <div className='text-sm font-medium'>I am available</div>
        </div>
      </div>
      <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
           Hello! Welcome to My Digital Space!</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>
        I’m Debasish Panigrahi, an Agile Engineer, Innovator, Problem Solver, Pianist
        </p>
        </div>
        <div className='flex flex-col md:flex-row lg:mt-20 justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Check what I&apos;ve got</span>
            <ArrowDown className="size-4"/>
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            {/* <span>emoji</span> */}
            <span className='font-semibold'>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
