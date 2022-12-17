import React from 'react'
import Logo from '../../assets/Icon/Logo Yayasan.svg'

const Navbar = () => {
  return (
    <div className='h-[88px] flex justify-center items-center'>
        <div className='container relative  flex h-[48px]'>
          <div className='font-inter flex items-center text-base font-semibold leading-6 gap-6'>
            <div className='pr-4'>
              <img src={Logo} alt="Logo Yayasan Cendikia" />
            </div>
            <div>
              <a href="#">Beranda</a>
            </div>
            <div>
              <a href="#">Pusat Edukasi</a>
            </div>
            <div>
              <a href="#">Join Yuk</a>
            </div>
            <div>
              <a href="#">Tentang Kami</a>
            </div>
          </div>
          <div className='absolute right-0 flex items-center'>
            <button className='w-[146px] h-[48px] bg-[#009FCC] font-inter text-base font-semibold text-white rounded'>
              <span>Masuk / Daftar</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar