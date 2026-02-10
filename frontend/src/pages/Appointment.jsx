import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {
  const {docId} = useParams()
  const {doctors} = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, SetDocSlots] = useState([])
  const [slotIndex, SetSlotIndex] = useState(0)
  const [slotTime, SetSlotTime] = useState('')

  const fetchDocInfo = async() => {
    const docInfo = doctors.find(docInfo => docInfo._id == docId)
    setDocInfo(docInfo)
  }
  const getAvailableSlots = async() => {
      // initialize empty slots
      SetDocSlots([])
      const allslots = []
      let today = new Date()
      let daysAdded = 0
      let currentDate = new Date(today)

      while (daysAdded < 7) {
          if (currentDate.getDay() === 0) {
              currentDate.setDate(currentDate.getDate()+1)
              currentDate.setHours(0,0,0,0)
              continue
          }

          const dayAnchor = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate(),
              
          )

          let start = new Date(dayAnchor)
          start.setHours(8,0,0,0)
          let end = new Date(dayAnchor)
          end.setHours(18,0,0,0) 

          const isToday = dayAnchor.toDateString() === today.toDateString()
          if (isToday){
              let rounded = new Date(today)
              rounded.setSeconds(0,0)
              const mins = rounded.getMinutes()
              const next = Math.ceil(mins/30) * 30

              if (next === 60) {
                  rounded.setHours(rounded.getHours()+1,0,0,0)
              } else {
                  rounded.setMinutes(next)
              }

              if (rounded.getTime() > start.getTime()) start = rounded
          }
          if (start.getTime() >= end.getTime()) {
              currentDate.setDate(currentDate.getDate() + 1)
              currentDate.setHours(0,0,0,0)
              continue}

          const slots = []
          const cursor = new Date(start)
          while (cursor < end) {
              slots.push(cursor.toLocaleTimeString('en-US', {hour:'2-digit',minute:'2-digit'}))
              cursor.setMinutes(cursor.getMinutes()+30)
          }

          allslots.push({
              'key': daysAdded,
              'date': [String(dayAnchor.getDate()),
                  dayAnchor.toLocaleString('en-US', {weekday: 'short'}),
                  dayAnchor.toLocaleString('en-US', {month: 'short'}),
              String(dayAnchor.getFullYear())
              ],
              'slots': slots
          })


          daysAdded++
          currentDate.setDate(currentDate.getDate()+1)
          currentDate.setHours(0,0,0,0)


          
      }
      SetDocSlots(allslots)
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
      {/* Left side: Doctor Image */}
      <div>
        <img className='bg-primary w-full sm:max-w-72 max-g-72 object-cover rounded-lg' src={docInfo.image}></img>
      </div>

      {/* Right side: Doctor Information */}
      <div className='flex-1 min-w-0'>
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
            <p>Appointment fee: ${docInfo.fees}</p>
          </div>
      </div>
        {/* Right Bottom: Booking slots section */}
        <div className='border border-gray-500 rounded-lg py-7 p-8 sm:pl-4 mt-4 font-medium text-gray-900'>
          <p>Book Slots</p>
          <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
            {docSlots.length && docSlots.map((item,index) => (
              <div onClick={() => SetSlotIndex(index)} key={index} className={`text-center py-6 px-6 min-w-16 rounded-3xl cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'} hover:bg-primary/10 hover:text-black transition-colors duration-300`}>
                <p>{item['date'] && item['date'][1]}</p>
                <p>{item['date'] && item['date'][0]}</p>
                <p>{item['date'] && item['date'][2]}</p>
                <p>{item['date'] && item['date'][3]}</p>
              </div>
            )) }
          </div>
          <div className='grid w-full items-center gap-3 overflow-hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-4'>
            {docSlots.length && docSlots[slotIndex]['slots'].map((item,index) => (
              <p key={index} onClick={()=>SetSlotTime(item)} className={`text-sm cursor-pointer border rounded-full border-gray-400 font-medium w-full truncate px-3 py-2 ${slotTime === item ? 'bg-primary text-white' : 'border border-gray-400'} hover:bg-primary/10 hover:text-black transition-colors duration-300`}>{item}</p>
            ))}
          </div>
          <button className='bg-primary border rounded-full text-lg font-semibold my-6 text-white px-14 py-3 hover:bg-primary/10 hover:text-black transition-colors duration-300'>Book an Appointment</button>
        </div>
      </div>
    </div>
    <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment
