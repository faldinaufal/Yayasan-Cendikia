import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/Icon/Logo Yayasan.svg'

const Navbar = () => {
  const activeLink = "text-[#009FCC]"
  const normalLink = "hover:text-[#009FCC] duration-150"
  return (
    <div className='h-[88px] flex justify-center shadow-navbar items-center'>
        <div className='container relative  flex h-[48px]'>
          <div className='font-inter flex items-center text-base font-semibold leading-6 gap-6'>
            <div className='pr-4'>
              <Link to='/'><img src={Logo} alt="Logo Yayasan Cendikia"/></Link>
            </div>
              <NavLink to='/' className={({isActive})=>isActive?activeLink:normalLink}>Beranda</NavLink>
              <NavLink to='/pusat-edukasi'  className={({isActive})=>isActive?activeLink:normalLink}>Pusat Edukasi</NavLink>
              <NavLink to='/join-yuk'  className={({isActive})=>isActive?activeLink:normalLink}>Join Yuk</NavLink>
              <NavLink to='/tentang-kami'  className={({isActive})=>isActive?activeLink:normalLink}>Tentang Kami</NavLink>
            </div>
          <div className='absolute right-0 flex items-center'>
            <Link to='/login' className='w-[146px] duration-200 h-[48px] bg-[#009FCC] font-inter text-base font-semibold text-white rounded hover:bg-white hover:text-[#009FCC] hover:border-[#009FCC] hover:border-2 flex items-center justify-center'>
              <span>Masuk / Daftar</span>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar