import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const {docId} = useParams()
  const {doctors} = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, SetDocSlots] = useState([])
  const [slotIndex, SetSlotIndex] = useState(0)
  const [slotTime, SetSlotTime] = useState('')
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const fetchDocInfo = async() => {
    const docInfo = doctors.find(docInfo => docInfo._id == docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async() => {

    // initialize empty slots
    SetDocSlots([])

    // get current date
    let today = new Date() // date constructor
    let currentDate = new Date(today) // get current date with index
    let endTime = new Date() // set endTime

    // set schedule for next seven days
    for (let i = 0; i < 7; i++) {
      // increment date for upto seven days in the future
      currentDate.setDate(today.getDate()+i)

      // setting end time of the day
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      // set hours of the day
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + i : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 0 : 30)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      // formatted date time
      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

        // add slots to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        // increment current time by 30 mins
        currentDate.setMinutes(currentDate.getMinutes() + 30)

      }

      SetDocSlots(prev => ([...prev, timeSlots]))
    }

  }

  useEffect(() => {
    fetchDocInfo()
  },[doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  },[docInfo, docId])

  useEffect(() => {
    console.log(docSlots)
  },[docSlots])
  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4 items-start'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 max-g-72 object-cover rounded-lg' src={docInfo.image}></img>
        </div>
        <div className='flex-1 border border-gray-500 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 translate-y-20 sm:translate-y-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} <img className='w-5' src={assets.veriifed_icon} /></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img className='w-5' src={assets.info} /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
        <div>
          <p>Appointment fee: ${docInfo.fees}</p>
        </div>
        </div>
      </div>    
    </div>
  )
}

export default Appointment
