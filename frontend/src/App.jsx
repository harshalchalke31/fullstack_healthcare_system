import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import NavBar from './components/NavBar'
import Chat from './pages/Chat'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='mx-4, sm:mx-[10%]'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointment />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App