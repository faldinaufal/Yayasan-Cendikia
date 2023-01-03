import React from 'react'
import Logo from '../../assets/Icon/Logo Yayasan.svg'

const Navbar = () => {
  return (
    <div className='h-[88px] flex justify-center shadow-navbar items-center'>
        <div className='container relative  flex h-[48px]'>
          <div className='font-inter flex items-center text-base font-semibold leading-6 gap-6'>
            <div className='pr-4'>
              <a href="/"><img src={Logo} alt="Logo Yayasan Cendikia" /></a>
            </div>
            <div>
              <a href="/" className='hover:text-[#009FCC]'>Beranda</a>
            </div>
            <div>
              <a href="/edukasi" className='hover:text-[#009FCC]'>Pusat Edukasi</a>
            </div>
            <div>
              <a href="/join" className='hover:text-[#009FCC]'>Join Yuk</a>
            </div>
            <div>
              <a href="/tentang-kami" className='hover:text-[#009FCC]'>Tentang Kami</a>
            </div>
          </div>
          <div className='absolute right-0 flex items-center'>
            <button className='w-[146px] h-[48px] bg-[#009FCC] font-inter text-base font-semibold text-white rounded hover:bg-white hover:text-[#009FCC] hover:border-[#009FCC] hover:border-2'>
              <span>Masuk / Daftar</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar