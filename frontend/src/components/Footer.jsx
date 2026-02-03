import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm bg-primary/10 rounded-lg px-6 my-20 py-5'>
            <div>
                <img className='mb-5 w-70' src={assets.logo} />
                <p className='w-full md:w-2/3 text-gray-600 leading-6 text-justify font-medium'>A software service that caters to both doctors and patients. Doctors can chat, call and meet patients. The doctors are
                    assisted by Top Tier AI models for Echocardiogram analysis, Brain Tumor Detection and general diagnosis. Patients get 
                    a chance to be diagnosed by Top-Tier Doctors and get real-time preliminary diagnosis powered by AI.</p>
            </div>
            
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li onClick={()=>navigate('/')} className='hover:underline cursor-pointer'>Home</li>
                    <li onClick={()=>navigate('/doctors')} className='hover:underline cursor-pointer'>All Doctors</li>
                    <li onClick={()=>navigate('/about')} className='hover:underline cursor-pointer'>About Us</li>
                    <li onClick={()=>navigate('/contact')} className='hover:underline cursor-pointer'>Contact</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Get in Touch</p>
                <div className='grid grid-cols-3 gap-4'>
                    <a href='https://www.linkedin.com/in/harshalchalke31/' target='_blank' rel='noopener noreferrer'>
                    <img className='w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 duration-300 hover:bg-gray-200 hover:shadow-md ' src={assets.linkedin_icon} />
                    </a><a href='https://github.com/harshalchalke31' target='_blank' rel='noopener noreferrer'>
                    <img className='w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 duration-300 hover:bg-gray-200 hover:shadow-md' src={assets.github_icon} />
                    </a><a href='https://harshalchalke31.github.io/harshalchalke31/' target='_blank' rel='noopener noreferrer'>
                    <img className='w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 duration-300 hover:bg-gray-200 hover:shadow-md' src={assets.portfolio_icon} />
                    </a><a href='mailto:hc4293@g.rit.edu' target='_blank' rel='noopener noreferrer'>
                    <img className='w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 duration-300 hover:bg-gray-200 hover:shadow-md' src={assets.gmail_icon} />
                    </a>
                </div>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@Primecare - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
