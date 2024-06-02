// components/Svasa.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Svasa = () => {
  return (
    <div className="bg-[#F0F0F0] py-12 px-4">
      <h1 className="text-3xl text-center mb-12">THE WORLD OF SVASA</h1>

      <div className="flex flex-wrap justify-center mx-auto p-4 max-w-6xl">
        {[
          {
            title: 'Svasa life',
            description: 'Svasa Life is a quarterly print publication with its origins in Bangalore, India.',
            src: '/svasa-logo.svg',
            link: 'https://svasalife.com/',
          },
          {
            title: 'Tamarind tree',
            description: 'The Tamarind Tree is a place where the old, the new, and someplace magical are crafted into an exquisite tapestry.',
            src: '/tamarind.jpg',
            link: 'https://www.thetamarindtree.in/',
          },
          {
            title: 'Azara beach house',
            description: 'It\'s a tranquil sanctuary suspended in a magical realm against the lazy backdrop of Goa and its heritage.',
            src: '/azara.jpg',
            link: 'https://azarabeachhouse.com/',
          },
          {
            title: 'Regalium',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            src: '/regalium.jpg',
            link: '/',
          },
        ].map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4">
            <Link href={item.link}>
              <div className="block bg-white md:h-[480px] rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-0 pb-[100%] mb-4 relative">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={item.src}
                    alt={item.title}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <hr className="w-1/3 mx-auto my-4 border-t-2 border-gray-300" />
                <p className="text-gray-700">{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Svasa;
