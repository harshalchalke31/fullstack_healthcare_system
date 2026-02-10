import React from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorCard = ({doctor}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/appointment/${doctor._id}`)}  className='border border-teal-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300'>
      <img className=' bg-primary/10' src={doctor.image} alt='' />
      <div className='p-4'>
        <div className={`flex items-center gap-2 text-sm text-center ${doctor.availability ? 'text-green-500' : 'text-yellow-500' }`} >
          <p className={`w-2 h-2 rounded-full ${doctor.availability ? 'bg-green-500' : 'bg-yellow-500'}`}></p><p>{doctor.availability ? 'Available' : 'On Call'}</p>
        </div>
        <p className='text-gray-900 font-medium text-lg'>{doctor.name}</p>
        <p className='text-gray-600 font-medium text-sm'>{doctor.speciality}</p>
      </div>
    </div>
  )
}

export default DoctorCard
