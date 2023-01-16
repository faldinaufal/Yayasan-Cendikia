import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/Icon/Logo Yayasan.svg'
import {HiOutlineMenuAlt3, HiOutlineMenuAlt2} from 'react-icons/hi'
import UserLogin from '../userLogin/UserLogin'
import {AiOutlineMessage} from 'react-icons/ai'

const Navbar = () => {
  const activeLink = "text-[#009FCC] mr-6"
  const normalLink = "hover:text-[#009FCC] duration-150 mr-6"
  const [open, setOpen] = useState(false)
  return (
    <div className={`shadow-navbar h-[88px] bg-white w-full ${open && 'fixed top-0 z-50'} lg:flex lg:justify-center lg:items-center`}>
        <div className='lg:container lg:relative  lg:flex lg:h-[48px]'>
          <div className='font-inter text-base font-semibold leading-6 gap-6 lg:flex lg:items-center'>
            <div className='mt-5 mb-7 flex items-center justify-between mx-2 lg:mt-0 lg:mb-0 lg:mx-0 lg:block lg:pr-4'>
              <Link to='/'><img src={Logo} alt="Logo Yayasan Cendikia" className='w-[60px] h-[60px] lg:w-[48px] lg:h-[48px]'/></Link>
              <div className='lg:hidden ml-auto mr-3 flex items-center gap-2'>
                <Link to='/consultation/message'><AiOutlineMessage className='text-4xl mt-1 hover:opacity-60 duration-200'/></Link>
                <UserLogin/>
              </div>
              <div onClick={()=>setOpen(!open)} className='lg:hidden'>
                {!open ? <HiOutlineMenuAlt2 className='text-3xl cursor-pointer duration-200'/>:<HiOutlineMenuAlt3 className='text-3xl cursor-pointer duration-200'/>}
              </div>
            </div>
            {/* mobile menu */}
              <div className='lg:hidden'>
                {open && (<div className='flex flex-col duration-150 items-center gap-7 w-screen bg-white relative -top-7 py-5 opacity-90 min-h-screen'>
                  <NavLink to='/' className={({isActive})=>isActive?activeLink:normalLink}>Beranda</NavLink>
                  <NavLink to={`/${process.env.REACT_APP_EDU}`}  className={({isActive})=>isActive?activeLink:normalLink}>Pusat Edukasi</NavLink>
                  <NavLink to={`/${process.env.REACT_APP_JOIN}`}  className={({isActive})=>isActive?activeLink:normalLink}>Join Yuk</NavLink>
                  <NavLink to={`/${process.env.REACT_APP_ABOUT}`}  className={({isActive})=>isActive?activeLink:normalLink}>Tentang Kami</NavLink>
                  <Link to='/login' className='w-[146px] mt-5 duration-200 h-[48px] bg-[#009FCC] font-inter text-base font-semibold text-white rounded hover:bg-white hover:text-[#009FCC] hover:border-[#009FCC] hover:border-2 flex items-center justify-center'>
                    Masuk / Daftar
                  </Link>
                </div>)} 
              </div>
              {/* laptop menu */}
              <div className='hidden lg:block'>
                <NavLink to='/' className={({isActive})=>isActive?activeLink:normalLink}>Beranda</NavLink>
                <NavLink to={`/${process.env.REACT_APP_EDU}`} className={({isActive})=>isActive?activeLink:normalLink}>Pusat Edukasi</NavLink>
                <NavLink to={`/${process.env.REACT_APP_JOIN}`} className={({isActive})=>isActive?activeLink:normalLink}>Join Yuk</NavLink>
                <NavLink to={`/${process.env.REACT_APP_ABOUT}`} className={({isActive})=>isActive?activeLink:normalLink}>Tentang Kami</NavLink>
              </div>
                <div className='absolute right-0 hidden lg:flex lg:items-center'>
                  <Link to='/login' className='w-[146px] duration-200 h-[48px] bg-[#009FCC] font-inter text-base font-semibold text-white rounded hover:bg-white hover:text-[#009FCC] hover:border-[#009FCC] hover:border-2 flex items-center justify-center'>
                    <span>Masuk / Daftar</span>
                  </Link>
                </div>
                  
                {/* <div className='absolute right-0 hidden lg:flex gap-2 lg:items-center'>
                  <Link to='/consultation/message'><AiOutlineMessage className='text-4xl mt-1 hover:opacity-60 duration-200'/></Link>
                  <UserLogin/>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar