import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navItemClass = ({ isActive }) =>{
        return `px-4 py-2 rounded-full transition
        ${isActive ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`
    };
    const navigate = useNavigate()
    const [token, setToken] = useState(true)
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500'>
        <img className='w-55 cursor-pointer' src={assets.logo} alt=''/>
        <ul className='hidden md:flex items-center gap-8 px-6 py-3 bg-primary/10 rounded-full font-medium'>
            <li>
                <NavLink to='/' className={navItemClass}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/doctors' className={navItemClass}>All Doctors</NavLink>
            </li >
            <li>
                <NavLink to='/about' className={navItemClass}>About Us</NavLink>
            </li>
            <li>
                <NavLink to='/contact' className={navItemClass}>Contact</NavLink>
            </li>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-12 rounded-full' src={assets.user1} />
                    <img className='w-2.5' src={assets.dropdown_icon} />
                    <div className='absolute top-4 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>setToken(false)} className='hover:text-red-600 cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                : <button onClick={()=>navigate('/login')} className='bg-primary rounded-full text-white px-8 py-3 hidden md:block font-medium'>Create Account</button>
            }
        </div>
    </div>
  )
}

export default NavBar
