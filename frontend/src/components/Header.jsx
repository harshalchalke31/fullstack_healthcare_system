import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-primary flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20'>
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10  md:py-[5.5vw] md:mb-[-30px]'>
        <p className='flex items-center gap-2 text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Get AI Diagnosis <img className='inline-block h-[1em] w-auto' src={assets.ai_logo} alt='' />
        </p>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment<br />with Trusted Doctors.
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white font-light text-lg'>
            <img className='w-28' src={assets.group_profiles} alt='' />
            <p>Browse through our<br className='hidden sm:block' />extensive list of specialist Doctors.</p>
        </div>
        <button href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm font-semibold mx-auto md:mx-0 hover:scale-105 transition-all duration-300'>
            Book Appointment <img className='w-3' src={assets.arrow} alt='' />
        </button>
        <button onClick={() => {navigate('/chat'); scrollTo(0,0)}} className='flex items-center gap-2 bg-gray-700 text-sm rounded-full px-8 py-3 text-white font-semibold mx-auto md:mx-0 hover:scale-105 transition-all duration-300 '>
          Chat <img className='w-3' src={assets.ai_logo} alt='' />
        </button>
      </div>
      <div className='md:w-[50%] relative'>
        <img className='w-full h-auto md:absolute bottom-0 rounded-lg' src={assets.poster} alt='' />
      </div>
    </div>
  )
}

export default Header
