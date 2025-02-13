import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
export const ContactSection = () => {
  return <div className='py-16 pt-12'>

      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0'>
          <div className='absolute inset-0 -z-10 opacity-5' style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
          <h2 className='font-serif text-2xl md:text-3xl lg:text-3xl'>Armed with Experience and ready to deploy!</h2>
          <p className='text-sm mt-2 md:text-2xl lg:text-2xl'>
            Let&apos;s connect and make something good, better!
          </p>
          <button className='text-white bg-gray-900 inline-flex items items-center px-6 h-12 rounded-xl gap-2 mt-8'>
            <span className='font-semibold'>Contact Me</span>
            <ArrowUpRightIcon className='size-4' />
          </button>
        </div>
      </div>
    </div>;
};
