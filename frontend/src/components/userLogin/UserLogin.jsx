import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {CgProfile, CgLogOut} from 'react-icons/cg'
import {RiLockPasswordFill} from 'react-icons/ri'
import ImageProfile from '../imageProfile/ImageProfile'
import Cookies from 'universal-cookie'

const UserLogin = () => {
  const [openProfile, setOpenProfile] = useState(false)
  const itemProfile = [
    {
      name: 'Profil',
      icon: <CgProfile/>,
      path: '/profile'
    },{
      name: 'Ganti Password',
      icon: <RiLockPasswordFill/>,
      path: '/change-password'
    }
  ]
  const cookies = new Cookies()

  const RemoveCookie = () => {
    cookies.remove('token')
    window.location.reload(false);
  }

  return (
    <section className='z-50'>
      <nav className='flex items-center justify-end gap-3'>
        <div className='flex items-center gap-1 lg:w-40 cursor-pointer' onClick={()=>setOpenProfile(!openProfile)}>
            <div className='cursor-pointer duration-150 w-10 h-10 rounded-full shadow-navadmn shadow-gray-400'>
              <ImageProfile/>
            </div>
            <p className='hidden lg:block lg:font-inter lg:font-700 lg:tracking-tighter lg:italic lg:line-clamp-1'>Wyero JR</p>
        </div>
      </nav>
      {openProfile && (<section className='relative z-50'>
        <div className='absolute w-[270px] shadow-xl rounded-lg p-4 z-50 right-0 bg-white top-2'>
          <div className='flex justify-center flex-col items-center'>
            <div className='w-[87px] h-[87px] rounded-full'>
              <ImageProfile/>
            </div>
            <div className='font-inter text-center font-600 mt-2 text-slate-800'>
              <p>Wyero JR</p>
              <p>wyero@gmail.com</p>
            </div>
          </div>
          <div>
            {itemProfile.map((itemProfile, index) => (
              <Link key={index} to={itemProfile.path} className='flex items-center gap-2 rounded-lg my-2 border-white border-[1px] py-2 duration-200 hover:bg-[#009FCC] hover:text-white'>
                <span className='ml-3 text-2xl'>{itemProfile.icon}</span>
                <span className='text-century font-600'>{itemProfile.name}</span>
              </Link>
            ))}
          </div>
          <button onClick={RemoveCookie} className='flex items-center gap-2 rounded-lg my-2 w-full py-2 text-century font-600 border-white border-[1px] duration-200 hover:bg-[#009FCC] hover:text-white'>
            <CgLogOut className='ml-3 text-2xl'/>
            Keluar
          </button>
        </div>
      </section>)}
    </section>
  )
}

export default UserLogin