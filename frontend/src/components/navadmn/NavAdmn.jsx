import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {FiMessageSquare} from 'react-icons/fi'
import {CgProfile, CgLogOut} from 'react-icons/cg'
import {RiLockPasswordFill} from 'react-icons/ri'
import { profile } from '../../assets/image'

const NavAdmn = () => {
  const [openProfile, setOpenProfile] = useState(false)
  const itemProfile = [
    {
      name: 'Profil',
      icon: <CgProfile/>,
      path: ''
    },{
      name: 'Ganti Password',
      icon: <RiLockPasswordFill/>,
      path: ''
    }
  ]
  return (
    <section>
      <nav className='flex items-center justify-end gap-3 mt-5'>
        <div className='shadow-navadmn cursor-pointer group shadow-gray-400 w-10 h-10 flex items-center justify-center rounded-full'>
            <FiMessageSquare className='text-xl text-gray-400 group-hover:text-black duration-200'/>
        </div>
        <div>
            <img src={profile} alt={profile} className=' cursor-pointer duration-150 w-11 h-11 rounded-full shadow-navadmn shadow-gray-400' onClick={()=>setOpenProfile(!openProfile)}/>
        </div>
      </nav>
      {openProfile && (<section className='relative z-50'>
        <div className='absolute w-[270px] shadow-xl rounded-lg p-4 z-50 right-0'>
          <div className='flex justify-center flex-col items-center'>
            <img src={profile} alt={profile} className='w-[87px] h-[87px] shadow-navadmn shadow-slate-600 rounded-full'/>
            <div className='font-inter text-center font-600 mt-2 text-slate-800'>
              <p>Wyero JR</p>
              <p>wyero@gmail.com</p>
            </div>
          </div>
          <div>
            {itemProfile.map((itemProfile, index) => (
              <Link key={index} to={itemProfile.path} className='flex items-center gap-2 rounded-lg my-2 border-white border-[1px] py-2 duration-200 hover:bg-blue-800 hover:text-white'>
                <span className='ml-3 text-2xl'>{itemProfile.icon}</span>
                <span className='text-century font-600'>{itemProfile.name}</span>
              </Link>
            ))}
          </div>
          <button className='flex items-center gap-2 rounded-lg my-2 w-full py-2 text-century font-600 border-white border-[1px] duration-200 hover:bg-blue-800 hover:text-white'>
            <CgLogOut className='ml-3 text-2xl'/>
            Keluar
          </button>
        </div>
      </section>)}
    </section>
  )
}

export default NavAdmn