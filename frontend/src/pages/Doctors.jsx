import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import DoctorCard from '../components/DoctorCard'

const Doctors = () => {
  const { speciality } = useParams()
  const [FilterDoc, setFilterDoc] = useState([])
  const {doctors} = useContext(AppContext)
  const decodedSpeciality = speciality ? decodeURIComponent(speciality) : null
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else {
      setFilterDoc(doctors)
    }
  }
  const navigate = useNavigate()
  useEffect(() => {
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-700 font-medium text-lg'>Browse through the list of specialist doctors.</p>
      <div className='flex felx-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-700 font-medium'>
          <p onClick={() => speciality === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-500 rounded hover:scale-110 transition-all cursor-pointer border ${speciality === "General Physician" ? "bg-primary/10": ""}`}>General Physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-500 rounded hover:scale-110 transition-all cursor-pointer border ${speciality === "Gynecologist" ? "bg-primary/10": ""}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-500 rounded hover:scale-110 transition-all cursor-pointer border ${speciality === "Dermatologist" ? "bg-primary/10": ""}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-500 rounded hover:scale-110 transition-all cursor-pointer border ${speciality === "Pediatrician" ? "bg-primary/10": ""}`}>Pediatrician</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-500 rounded hover:scale-110 transition-all cursor-pointer border ${speciality === "Neurologist" ? "bg-primary/10": ""}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border-gray-500 rounded hover:scale-110 transition-all cursor-pointer border ${speciality === "Gastroenterologist" ? "bg-primary/10": ""}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              FilterDoc.map((doctors) =>(
                <DoctorCard key={doctors._id} doctor={doctors}/>
              ))
            }
        </div>
      </div>
      
    </div>
  )
}

export default Doctors
