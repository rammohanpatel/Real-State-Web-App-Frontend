import React from 'react';
import Link from 'next/link';

const BelowHero = () => {
  return (
    <div className="bg-[#F3E7D9] h-4/5 w-full mt-10 flex items-center">
      <div className="bg-[#F3E7D9] p-10 max-w-3xl mx-auto h-3/5">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">WHAT ARE YOU LOOKING TO ACHIEVE?</h2>
        <div className="text-xl space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8  h-3/5">
          <div className="flex flex-col items-start py-2 border-b md:border-none border-gray-200">
            <p className="text-gray-600">Deliver new products to market</p>
            <Link href="/how-we-help-clients" className="text-blue-500 hover:underline font-semibold">Learn more</Link>
          </div>
          <div className="flex flex-col items-start py-2 border-b md:border-none border-gray-200">
            <p className="text-gray-600">Reduce cost to operate/assemble</p>
            <Link href="/how-we-help-clients" className="text-blue-500 hover:underline font-semibold">Learn more</Link>
          </div>
          <div className="flex flex-col items-start py-2 border-b md:border-none border-gray-200">
            <p className="text-gray-600">Build a better customer experience</p>
            <Link href="/how-we-help-clients" className="text-blue-500 hover:underline font-semibold">Learn more</Link>
          </div>
          <div className="flex flex-col items-start py-2 border-b md:border-none border-gray-200">
            <p className="text-gray-600">Increase employee engagement</p>
            <Link href="/how-we-help-clients" className="text-blue-500 hover:underline font-semibold">Learn more</Link>
          </div>
          <div className="flex flex-col items-start py-2 border-b md:border-none border-gray-200">
            <p className="text-gray-600">Scale your design capabilities</p>
            <Link href="/how-we-help-clients" className="text-blue-500 hover:underline font-semibold">Learn more</Link>
          </div>
          <div className="flex flex-col items-start py-2">
            <p className="text-gray-600">Infuse design into your culture</p>
            <Link href="/how-we-help-clients" className="text-blue-500 hover:underline font-semibold">Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowHero;
