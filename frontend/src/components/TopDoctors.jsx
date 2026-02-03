import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import DoctorCard from './DoctorCard'
import { AppContext } from '../context/AppContext'


const TopDoctors = () => {
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 md:my-10 text-gray-900 font-medium'>
      <h1 className='text-3xl text-gray-900 font-semibold'>Book Top Doctors</h1>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,5).map((doctor)=>(
          <DoctorCard key={doctor._id} doctor={doctor} /> 
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='text-gray-700 rounded-full font-medium bg-primary/10 px-12 py-3 mt-10 hover:translate-y-[-10px] transition-all duration-300'>More</button>
    </div>
  )
}

export default TopDoctors
