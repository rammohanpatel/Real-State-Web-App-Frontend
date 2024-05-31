'use client'
import React from 'react'
import BackgroundVideo from 'next-video/background-video'

const Hero = () => {
  return (
    <BackgroundVideo src="/hero.MOV"  >
    </BackgroundVideo>
  )
}

export default Hero
