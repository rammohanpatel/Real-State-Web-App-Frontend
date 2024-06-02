import React from 'react';
import Image from 'next/image';

const OurApproach = () => {
  return (
    <div className='mt-16'>
      <div className="bg-white py-10">
        <h1 className="text-center text-4xl font-bold text-black mb-44">Our Approach</h1>
      </div>
      <div className="bg-[#A46C4E] w-full text-center pt-20 pb-10">
      <div className="h-96 max-w-6xl mx-auto -mt-60 relative">
            <Image
              src="/our-approach.avif"
              layout="fill"
              objectFit="cover"
              alt="Our Approach Image"
            />
          </div>
      
      
        
          
          <div className="rounded-lg mt-10 overflow-hidden  bg-blue-gray-500/40  p-8 md:p-12 lg:p-16 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            “COMMITTED to delivering a FUNCTIONAL, AESTHETIC & BESPOKE product for YOU”
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
            Existing within the luxury retail and design realm, our studio aims to bring to light the finer things in life and living for our clients. Working closely with our clients, our team understands their aesthetic and functional needs, and helps provide a seamless experience of highly customisable, detail-oriented and personalised design solutions that are tailored to their lifestyle and requirements. The overall approach of our studio, be it in terms of services, products or even our internal structure, is that of a mindful one where everything has a purpose - we believe in creating spaces that are comfortable, inviting, and inspirational just like the people who inhabit them.            </p>
          </div>
        
      </div>
    </div>
  );
};

export default OurApproach;
