import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className='bg-[#A46C4E] p-12'>
        <div className='flex flex-row justify-around'>
            <div className='ml-28 text-3xl text-white'> 
                Connect With Machani Group
            </div>
            <div>
                <Link href='/contact-us' > 
                 <button className="bg-white text-[#A46C4E] font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded" > Contact Us</button>
                </Link>           
            </div>
        </div>
    </div>
    <div className='p-3 ml-10' >
        <h2>© 2023 DHI Design</h2>
    </div>
    </>
  )
}

export default Footer