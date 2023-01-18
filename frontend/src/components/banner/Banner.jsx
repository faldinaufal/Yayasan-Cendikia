import React from 'react'
import TerapiIcon from '../../assets/Icon/terapi.svg'
import KonsultasiIcon from '../../assets/Icon/konsultasi.svg'
import KerjasamaIcon from '../../assets/Icon/kerjasama.svg'
import FrameBanner from '../../assets/image/Frame.svg'

const Banner = () => {
  return (
    <div className='bg-about py-7 w-full lg:py-0 lg:h-[600px] overflow-hidden'>
        <div className='container md:flex md:items-center gap-6 lg:mt-20'>
            <div className='container'>
                <div className='grid gap-6'>
                    <div className='lg:w-[588px]'>
                        <h1 className='text-[#009FCC] font-century text-[40px] leading-[60px] md:text-start lg:text-[68px] md:leading-[76px]'>Latih Potensi <span className='text-dark'>dan</span></h1>
                        <h1 className='text-[#009FCC] font-century text-[40px] leading-[60px] md:text-start lg:text-[68px] md:leading-[76px]'>Kembangkan Bakat</h1>
                    </div>
                    <p className='font-inter text-18 leading-7 font-normal text-[#484D56] mx-1 md:text-start lg:w-[588px]'>Melalui program pelatihan yang kami sediakan, kami percaya bahwa anak-anak dengan disabilitas dapat mencapai potensi yang terbaik dan menjadi bagian dari masyarakat yang lebih inklusif.</p>
                    <div className='flex justify-center flex-wrap gap-6 my-5 '>
                        <div>
                            <a href={`/${process.env.REACT_APP_JOIN}`} className='flex items-center w-[180px] rounded-lg px-2 py-4 bg-white gap-1'>
                                <img src={TerapiIcon} alt="Terapi Icon" />
                                <p className='text-base font-semibold font-inter'>Terapi</p>
                            </a>
                        </div>
                        <div>
                            <a href={`/${process.env.REACT_APP_JOIN}`} className='flex items-center w-[180px] rounded-lg px-2 py-4 bg-white gap-1'>
                                <img src={KonsultasiIcon} alt="Konsultasi Icon" />
                                <p className='text-base font-semibold font-inter'>Konsultasi</p>
                            </a>
                        </div>
                        <div>
                            <a href={`/`} className='flex items-center w-[180px] rounded-lg px-2 py-4 bg-white gap-1'>
                                <img src={KerjasamaIcon} alt="Kerjasama Icon" />
                                <p className='text-base font-semibold font-inter'>Kerjasama</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='flex justify-center'>
                    <img src={FrameBanner} alt="Gambar Anak Belajar" className=''/>
                </div>
            </div>
        </div>
        <div>
        <div className='lg:w-full lg:h-[80px] lg:flex lg:mt-9 lg:relative'>
            <div className='lg:bg-white lg:w-[50%] lg:absolute lg:left-0 lg:rotate-1 lg:h-[80px]'></div>
            <div className='lg:bg-white lg:w-[60%] lg:absolute lg:-right-2 lg:-rotate-[4.7deg] lg:mt-4 lg:h-[120px] lg:-top-9 lg:left'></div>
        </div>
        </div>
    </div>
  )
}

export default Banner