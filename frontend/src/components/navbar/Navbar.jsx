import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Icon/Logo Yayasan.svg'
import {HiOutlineMenuAlt3, HiOutlineMenuAlt2} from 'react-icons/hi'
import UserLogin from '../userLogin/UserLogin'
import {AiOutlineMessage} from 'react-icons/ai'
import Cookies from 'universal-cookie'

const Navbar = () => {
  const activeLink = "text-[#009FCC] mr-6"
  const normalLink = "hover:text-[#009FCC] duration-150 mr-6"
  const [open, setOpen] = useState(false)
  const cookies = new Cookies()
  const jwttoken = cookies.get('token')

  if(jwttoken) {
    return (
      <div className={`shadow-navbar h-[88px] bg-white w-full ${open && 'fixed top-0 z-50'} md:flex md:justify-center md:items-center`}>
          <div className='md:container md:relative  md:flex md:h-[48px]'>
            <div className='font-inter text-base font-semibold leading-6 gap-6 md:flex md:items-center'>
              <div className='mt-5 mb-7 flex items-center justify-between mx-2 md:mt-0 md:mb-0 md:mx-0 md:block md:pr-4'>
                <a href='/'><img src={Logo} alt="Logo Yayasan Cendikia" className='w-[60px] h-[60px] md:w-[48px] md:h-[48px]'/></a>
                <div className='md:hidden ml-auto mr-3 flex items-center gap-2'>
                  <a href='/consultation/message'><AiOutlineMessage className='text-4xl mt-1 hover:opacity-60 duration-200'/></a>
                  <UserLogin/>
                </div>
                <div onClick={()=>setOpen(!open)} className='md:hidden'>
                  {!open ? <HiOutlineMenuAlt2 className='text-3xl cursor-pointer duration-200'/>:<HiOutlineMenuAlt3 className='text-3xl cursor-pointer duration-200'/>}
                </div>
              </div>
              {/* mobile menu */}
                <div className='md:hidden'>
                  {open && (<div className='flex flex-col duration-150 items-center gap-7 w-screen bg-white relative -top-7 py-5 opacity-90 min-h-screen'>
                    <NavLink to='/' className={({isActive})=>isActive?activeLink:normalLink}>Beranda</NavLink>
                    <NavLink to={`/${process.env.REACT_APP_EDU}`}  className={({isActive})=>isActive?activeLink:normalLink}>Pusat Edukasi</NavLink>
                    <NavLink to={`/${process.env.REACT_APP_JOIN}`}  className={({isActive})=>isActive?activeLink:normalLink}>Join Yuk</NavLink>
                    <NavLink to={`/${process.env.REACT_APP_ABOUT}`}  className={({isActive})=>isActive?activeLink:normalLink}>Tentang Kami</NavLink>
                    <a href={`/${process.env.REACT_APP_LOGIN}`} className='w-[146px] mt-5 duration-200 h-[48px] bg-[#009FCC] font-inter text-base font-semibold text-white rounded hover:bg-white hover:text-[#009FCC] hover:border-[#009FCC] hover:border-2 flex items-center justify-center'>
                      Masuk / Daftar
                    </a>
                  </div>)} 
                </div>
                {/* laptop menu */}
                <div className='hidden md:block'>
                  <NavLink to='/' className={({isActive})=>isActive?activeLink:normalLink}>Beranda</NavLink>
                  <NavLink to={`/${process.env.REACT_APP_EDU}`} className={({isActive})=>isActive?activeLink:normalLink}>Pusat Edukasi</NavLink>
                  <NavLink to={`/${process.env.REACT_APP_JOIN}`} className={({isActive})=>isActive?activeLink:normalLink}>Join Yuk</NavLink>
                  <NavLink to={`/${process.env.REACT_APP_ABOUT}`} className={({isActive})=>isActive?activeLink:normalLink}>Tentang Kami</NavLink>
                </div>
                  <div className='absolute right-0 hidden md:flex gap-2 md:items-center'>
                    <a href='/consultation/message'><AiOutlineMessage className='text-4xl mt-1 hover:opacity-60 duration-200'/></a>
                    <UserLogin/>
                  </div>
              </div>
          </div>
      </div>
    )
  }

  if(!jwttoken){
    return (
      <div className={`shadow-navbar h-[88px] bg-white w-full ${open && 'fixed top-0 z-50'} md:flex md:justify-center md:items-center`}>
          <div className='md:container relative items-center md:flex md:h-[48px]'>
            <div className='font-inter text-base align-middle font-semibold leading-6 gap-6 md:flex md:items-center'>
              <div className='mt-5 mb-7 flex items-center justify-between mx-2 md:mt-0 md:mb-0 md:mx-0 md:block md:pr-4'>
                <a href='/'><img src={Logo} alt="Logo Yayasan Cendikia" className='w-[60px] h-[60px] md:w-[48px] md:h-[48px]'/></a>
                <div className='md:hidden ml-auto mr-3 flex items-center gap-2'>
                  <a href='/consultation/message'><AiOutlineMessage className='text-4xl mt-1 hover:opacity-60 duration-200'/></a>
                  <UserLogin/>
                </div>
                <div onClick={()=>setOpen(!open)} className='md:hidden'>
                  {!open ? <HiOutlineMenuAlt2 className='text-3xl cursor-pointer duration-200'/>:<HiOutlineMenuAlt3 className='text-3xl cursor-pointer duration-200'/>}
                </div>
              </div>
              {/* mobile menu */}
              <div className='md:hidden'>
                {open && (<div className='flex flex-col duration-150 items-center gap-7 w-screen bg-white relative -top-7 py-5 opacity-90 min-h-screen'>
                  <NavLink to='/' className={({isActive})=>isActive?activeLink:normalLink}>Beranda</NavLink>
                  <NavLink to={`/${process.env.REACT_APP_EDU}`}  className={({isActive})=>isActive?activeLink:normalLink}>Pusat Edukasi</NavLink>
                  <NavLink to={`/${process.env.REACT_APP_JOIN}`}  className={({isActive})=>isActive?activeLink:normalLink}>Join Yuk</NavLink>
                  <NavLink to={`/${process.env.REACT_APP_ABOUT}`}  className={({isActive})=>isActive?activeLink:normalLink}>Tentang Kami</NavLink>
                  <a href={`/${process.env.REACT_APP_LOGIN}`} className='w-[146px] mt-5 duration-200 h-[48px] bg-[#009FCC] font-inter text-base font-semibold text-white rounded hover:bg-white hover:text-[#009FCC] hover:border-[#009FCC] hover:border-2 flex items-center justify-center'>
                    Masuk / Daftar
                  </a>
                </div>)} 
              </div>
              {/* laptop menu */}
              <div className='hidden md:block'>
                <NavLink to='/' className={({isActive})=>isActive?activeLink:normalLink}>Beranda</NavLink>
                <NavLink to={`/${process.env.REACT_APP_EDU}`} className={({isActive})=>isActive?activeLink:normalLink}>Pusat Edukasi</NavLink>
                <NavLink to={`/${process.env.REACT_APP_JOIN}`} className={({isActive})=>isActive?activeLink:normalLink}>Join Yuk</NavLink>
                <NavLink to={`/${process.env.REACT_APP_ABOUT}`} className={({isActive})=>isActive?activeLink:normalLink}>Tentang Kami</NavLink>
              </div>
              <div className='absolute right-0 hidden md:flex md:items-center'>
                <button className='w-[146px] duration-200 h-[48px] bg-[#009FCC] font-inter text-base font-semibold text-white rounded hover:bg-white hover:text-[#009FCC] hover:border-[#009FCC] hover:border-2 flex items-center justify-center'>
                  <a href={`/${process.env.REACT_APP_LOGIN}`}>Masuk / Daftar</a>
                </button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Navbar