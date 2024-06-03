'use client'
import React from 'react'
import BackgroundVideo from 'next-video/background-video'

const Hero = () => {

  const handleScroll = ()=>{
        window.scrollTo({
          top:window.innerHeight,
          behavior:'smooth'
        })
  }

  return (
    <>    
      <BackgroundVideo src="/hero.MOV" />
      
      <div className='container'>
        <div className='field'>
          <div className='scroll' onClick={handleScroll}></div>
        </div>
      </div>
    </>
  )
}

export default Hero
