'use client'
import React from 'react'
import BackgroundVideo from 'next-video/background-video'

const Hero = () => {
  return (
    <>
     
      <BackgroundVideo src="/hero.MOV" />
      
      <div className='container'>
        <div className='field'>
          <div className='scroll'></div>
        </div>
      </div>
    </>
  )
}

export default Hero
