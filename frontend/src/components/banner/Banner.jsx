import React from 'react'
import TerapiIcon from '../../assets/Icon/terapi.svg'
import KonsultasiIcon from '../../assets/Icon/konsultasi.svg'
import KerjasamaIcon from '../../assets/Icon/kerjasama.svg'
import FrameBanner from '../../assets/image/Frame.svg'

const Banner = () => {
  return (
    <div className=''>
        <div className='container h-[600px] flex justify-center items-center gap-6'>
            <div className='container'>
                <div className='grid gap-6'>
                    <div className='w-[588px]'>
                        <div className='flex gap-5'>
                            <h1 className='text-[#009FCC] font-century text-[68px] leading-[76px]'>Latih Potensi</h1>
                            <h1 className='font-century text-[68px] leading-[76px]'> dan</h1>
                        </div>
                        <h1 className='text-[#009FCC] font-century text-[68px] leading-[76px]'>Kembangkan Bakat</h1>
                    </div>
                    <div className='font-inter text-18 leading-7 font-normal text-[#484D56] w-[588px]'>
                        <p>Melalui program pelatihan yang kami sediakan, kami percaya bahwa anak-anak dengan disabilitas dapat mencapai potensi yang terbaik dan menjadi bagian dari masyarakat yang lebih inklusif.</p>
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <button className='flex items-center w-[180px] rounded-lg px-2 py-4 bg-white gap-1'>
                                <img src={TerapiIcon} alt="Terapi Icon" />
                                <p className='text-base font-semibold font-inter'>Terapi</p>
                            </button>
                        </div>
                        <div>
                            <button className='flex items-center w-[180px] rounded-lg px-2 py-4 bg-white gap-1'>
                                <img src={KonsultasiIcon} alt="Konsultasi Icon" />
                                <p className='text-base font-semibold font-inter'>Konsultas</p>
                            </button>
                        </div>
                        <div>
                            <button className='flex items-center w-[180px] rounded-lg px-2 py-4 bg-white gap-1'>
                                <img src={KerjasamaIcon} alt="Kerjasama Icon" />
                                <p className='text-base font-semibold font-inter'>Kerjasama</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div>
                    <img src={FrameBanner} alt="Gambar Anak Belajar" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner