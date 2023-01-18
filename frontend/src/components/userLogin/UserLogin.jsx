import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {CgProfile, CgLogOut} from 'react-icons/cg'
import {RiLockPasswordFill} from 'react-icons/ri'
import ImageProfile from '../imageProfile/ImageProfile'
import Cookies from 'universal-cookie'
import axios from 'axios'

const UserLogin = () => {
  const [openProfile, setOpenProfile] = useState(false)
  const [data, setData] = useState()
  const cookies = new Cookies()
  const jwttoken = cookies.get('token')

  useEffect(() => {
    getMe()
  },[data])

  const getMe = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/users/me?populate=*`, {
        headers: {
          Authorization: `Bearer ${jwttoken}`
        },
      }).then((response) => setData(response.data))
    } catch (error) {
        console.log(error)
    }
  }

  const RemoveCookie = () => {
    cookies.remove('token',{path: "/"})
    window.location.reload(false);
  }

  return (
    <section className='z-50'>
      { data &&
        <nav className='flex items-center justify-end gap-3'>
        <div className='flex items-center gap-3 cursor-pointer' onClick={()=>setOpenProfile(!openProfile)}>
            <div className='cursor-pointer duration-150 w-10 h-10 rounded-full shadow-navadmn shadow-gray-400'>
              <ImageProfile image={process.env.REACT_APP_API_URL+data.photoProfile.url}/>
            </div>
        </div>
      </nav>
      }
      { openProfile && (<section className='relative z-50'>
        <div className='absolute w-[270px] shadow-xl rounded-lg p-4 z-50 right-0 bg-white top-2'>
          <div className='flex justify-center flex-col items-center'>
            <div className='w-[87px] h-[87px] rounded-full'>
              <ImageProfile image={process.env.REACT_APP_API_URL+data.photoProfile.url}/>
            </div>
            <div className='font-inter text-center font-600 mt-2 text-slate-800'>
              <p>{data.username}</p>
              <p>{data.email}</p>
            </div>
          </div>
          <div>
          <div>
            <a href={`/profile/${data.username}`} className='flex items-center gap-2 rounded-lg my-2 border-white border-[1px] py-2 duration-200 hover:bg-[#009FCC] hover:text-white'>
              <span className='ml-3 text-2xl'><CgProfile/></span>
              <span className='text-century font-600'>Profil</span>
            </a>
            <a href={`/profile/${data.username}/change-password`} className='flex items-center gap-2 rounded-lg my-2 border-white border-[1px] py-2 duration-200 hover:bg-[#009FCC] hover:text-white'>
              <span className='ml-3 text-2xl'><RiLockPasswordFill/></span>
              <span className='text-century font-600'>Ganti Password</span>
            </a>
          </div>
          </div>
          <button onClick={RemoveCookie} className='flex items-center gap-2 rounded-lg my-2 w-full py-2 text-century font-600 border-white border-[1px] duration-200 hover:bg-[#009FCC] hover:text-white'>
            <CgLogOut className='ml-3 text-2xl'/>
            Keluar
          </button>
        </div>
      </section>)
      }
    </section>
  )
}

export default UserLogin