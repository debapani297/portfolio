// import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
// import grainImage from '@/assets/images/grain.jpg';
// import { useState } from 'react';

// const ContactButton = () => {
//   const [clicked, setClicked] = useState(false);
  
//   const handleClick = () => {
//     setClicked(true);
//   };

// export const ContactSection = () => {
//   return <section id="Contact" className='py-16 pt-12'>

//       <div className='container'>
//         <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0'>
//           <div className='absolute inset-0 -z-10 opacity-5' style={{
//             backgroundImage: `url(${grainImage.src})`
//           }}></div>
//           <h2 className='font-serif text-2xl md:text-3xl lg:text-3xl'>Armed with Experience and ready to deploy!</h2>
//           <p className='text-sm mt-2 md:text-2xl lg:text-2xl'>
//             Let&apos;s connect and make something good, better!
//           </p>
//           <button 
//         onClick={handleClick} 
//         className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8'
//       >
//         <span className='font-semibold'>
//           {clicked ? 'your-email@example.com' : 'Contact Me'}
//         </span>
//             <ArrowUpRightIcon className='size-4' />
//           </button>
//         </div>
//       </div>
//     </section>;
// };

// 'use client';
// import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
// import grainImage from '@/assets/images/grain.jpg';
// import { useState } from 'react';

// // ContactButton component
// const ContactButton = () => {
//   const [clicked, setClicked] = useState(false);
  
//   const handleClick = () => {
//     setClicked((prevClicked) => !prevClicked); // Toggle between clicked and not clicked
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 mx-auto' // Center the button
//     >
//       <span className='font-semibold select-text'>
//         {clicked ? 'debasishpanigrahi297@gmail.com' : 'Contact Me'}
//       </span>
//       <ArrowUpRightIcon className='w-5 h-5' /> {/* Adjusted size */}
//     </button>
//   );
// };

// // ContactSection component
// export const ContactSection = () => {
//   return (
//     <section id="Contact" className='py-16 pt-12'>
//       <div className='container'>
//         <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0'>
//           <div className='absolute inset-0 -z-10 opacity-5' style={{
//             backgroundImage: `url(${grainImage.src})`
//           }}></div>
//           <h2 className='font-serif text-2xl md:text-3xl lg:text-3xl'>Armed with Experience and ready to deploy!</h2>
//           <p className='text-sm mt-2 md:text-2xl lg:text-2xl'>
//             Let&apos;s connect and make something good, better!
//           </p>
//           <ContactButton /> {/* Use the ContactButton here */}
//         </div>
//       </div>
//     </section>
//   );
// };

'use client';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { useState } from 'react';

// ContactButton component with modal
const ContactButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Contact Button */}
      <button
        onClick={handleClick}
        className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 mx-auto'
      >
        <span className='font-semibold'>Contact Me</span>
        <ArrowUpRightIcon className='w-5 h-5' />
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="text-gray-700 mt-2 select-text">debasishpanigrahi297@gmail.com</p>
            <div className="flex justify-center gap-4 mt-4">
              {/* Send Email */}
              <a
                href="mailto:debasishpanigrahi297@gmail.com"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Send Email
              </a>
              {/* Close Modal */}
              <button
                onClick={handleClose}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ContactSection component
export const ContactSection = () => {
  return (
    <section id="Contact" className='py-16 pt-12'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0'>
          <div
            className='absolute inset-0 -z-10 opacity-5'
            style={{
              backgroundImage: `url(${grainImage.src})`,
              backgroundSize: 'cover',
            }}
          ></div>
          <h2 className='font-serif text-2xl md:text-3xl lg:text-3xl'>
            Armed with Experience and ready to deploy!
          </h2>
          <p className='text-sm mt-2 md:text-2xl lg:text-2xl'>
            Let&apos;s connect and make something good, better!
          </p>
          <ContactButton />
        </div>
      </div>
    </section>
  );
};
