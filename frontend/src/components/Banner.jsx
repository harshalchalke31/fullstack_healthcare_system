import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 left-0 max-w-md' src={assets.banner} alt='' />
      </div>
      <div className='flex-1 gap-2 py-8 sm:py-10 md:py-16 lg:py-24 lg:pr-5 text-right flex flex-col justify-end'>
        <div className='text-lg text-white font-semibold sm:text-2xl md:text-3xl lg:text-5xl'>
          <p>Your Health is Our Goal.</p>
          <p>Get AI Insights.</p>
        </div>
        <button onclick={() => navigate('/login')} className='self-end w-fit bg-white text-gray-700 font-medium rounded-full text-sm px-8 py-3 sm:text-base mt-6 hover:scale-105 transition-all duration-300'>Create Account</button>
        <button onClick={() => {navigate('/chat'); scrollTo(0,0)}} className='text-white self-end w-fit bg-gray-800 font-medium rounded-full px-8 py-3 sm:text-base mt-6 flex gap-2  hover:scale-105 transition-all duration-300'>
          Chat <img className='w-3' src={assets.ai_logo} /></button>
      </div>
      
    </div>
  )
}

export default Banner
