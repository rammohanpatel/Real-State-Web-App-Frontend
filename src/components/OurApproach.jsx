import React from 'react'
import Image from 'next/image'

const OurApproach = () => {
  return (
    <div className='' >
   <h1 className='text-center font-bold text-2xl mt-10'>Our Approach</h1>

    <div class="relative flex flex-col mt-12 text-gray-700 bg-[#051C2C] shadow-md bg-clip-border  w-full">
        <div
            class="relative justify-center  h-56 mx-auto  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image
            src='/machani-group-logo.png'
            width={800}
            height={400}
            alt="card-image" />
        </div>
        <div class="p-6 text-center text-white">
            <h5 class="block mb-2  text-3xl antialiased font-semibold font-serif leading-snug tracking-normal text-blue-gray-900">
               Commited to your full design journey
            </h5>
            <p class="block font-sans antialiased font-semibold leading-relaxed text-inherit">
            We work zealously with you, side by side building your institutional capabilities to better understand the market, uncover customer and user insights, evolve and create exceptional customer experiences, and successfully bring them to market.
            </p>
        </div>
    </div>  
    </div>
  )
}

export default OurApproach