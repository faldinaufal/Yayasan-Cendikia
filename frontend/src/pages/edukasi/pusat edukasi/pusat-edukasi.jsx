import React from 'react'
import { Footer, Navbar } from '../../../components'
import VectorGray from '../../../assets/Icon/Vector Abu.svg'
import VectorGrayLeft from '../../../assets/Icon/Vector Abu Kiri.svg'
import VectorBlueRight from '../../../assets/Icon/Vector Biru Kanan.svg'
import ImageCard1 from '../../../assets/image/image card1.jpg'
import ImageCard2 from '../../../assets/image/image card2.jpg'
import ImageCard3 from '../../../assets/image/image card3.jpg'
import ImageCard4 from '../../../assets/image/image card4.jpg'
import ImageCard5 from '../../../assets/image/image card5.jpg'
import ImageCard6 from '../../../assets/image/image card6.jpg'

const Education = () => {
  return (
    <div>
        <Navbar/>
        <div className='container grid gap-6 my-10'>
            <div className='flex gap-[15px]'>
                <a href="/edukasi" className='font-inter text-[#009FCC] font-semibold text-base'>Pusat Edukasi</a>
                <img src={VectorGray} alt="" />
                <p className='font-inter text-[#6B7280] font-semibold text-base'>Artikel Ilmiah</p>
            </div>
            <div>
              <h3 className='font-century text-[36px] leading-[42px] text-[#262626] self-stretch'>Artikel Ilmiah</h3>
            </div>
            <div className='grid grid-cols-3 gap-6'>
              <div className='card w-[384px] h-[452px] rounded-lg border border-[#E0E7FF] shadow-card'>
                <div>
                  <img src={ImageCard1} alt="Gambar Artikel" className='rounded-t-lg'/>
                </div>
                <div className='p-4 grid gap-4'>
                  <div className='font-century text-[24px] leading-[30px] text-[#262626]'>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                  </div>
                  <div>
                    <p className='font-inter font-normal text-base text-[#6B7280] line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.</p>
                  </div>
                  <div className='text-xs font-inter font-normal text-[#6B7280]'>
                    <p>31 January 2030</p>
                  </div>
                </div>
              </div>
              <div className='card w-[384px] h-[452px] rounded-lg border border-[#E0E7FF] shadow-card'>
                <div>
                  <img src={ImageCard2} alt="Gambar Artikel" className='rounded-t-lg'/>
                </div>
                <div className='p-4 grid gap-4'>
                  <div className='font-century text-[24px] leading-[30px] text-[#262626]'>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                  </div>
                  <div>
                    <p className='font-inter font-normal text-base text-[#6B7280] line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.</p>
                  </div>
                  <div className='text-xs font-inter font-normal text-[#6B7280]'>
                    <p>31 January 2030</p>
                  </div>
                </div>
              </div>
              <div className='card w-[384px] h-[452px] rounded-lg border border-[#E0E7FF] shadow-card'>
                <div>
                  <img src={ImageCard3} alt="Gambar Artikel" className='rounded-t-lg'/>
                </div>
                <div className='p-4 grid gap-4'>
                  <div className='font-century text-[24px] leading-[30px] text-[#262626]'>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                  </div>
                  <div>
                    <p className='font-inter font-normal text-base text-[#6B7280] line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.</p>
                  </div>
                  <div className='text-xs font-inter font-normal text-[#6B7280]'>
                    <p>31 January 2030</p>
                  </div>
                </div>
              </div>
              <div className='card w-[384px] h-[452px] rounded-lg border border-[#E0E7FF] shadow-card'>
                <div>
                  <img src={ImageCard4} alt="Gambar Artikel" className='rounded-t-lg'/>
                </div>
                <div className='p-4 grid gap-4'>
                  <div className='font-century text-[24px] leading-[30px] text-[#262626]'>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                  </div>
                  <div>
                    <p className='font-inter font-normal text-base text-[#6B7280] line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.</p>
                  </div>
                  <div className='text-xs font-inter font-normal text-[#6B7280]'>
                    <p>31 January 2030</p>
                  </div>
                </div>
              </div>
              <div className='card w-[384px] h-[452px] rounded-lg border border-[#E0E7FF] shadow-card'>
                <div>
                  <img src={ImageCard5} alt="Gambar Artikel" className='rounded-t-lg'/>
                </div>
                <div className='p-4 grid gap-4'>
                  <div className='font-century text-[24px] leading-[30px] text-[#262626]'>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                  </div>
                  <div>
                    <p className='font-inter font-normal text-base text-[#6B7280] line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.</p>
                  </div>
                  <div className='text-xs font-inter font-normal text-[#6B7280]'>
                    <p>31 January 2030</p>
                  </div>
                </div>
              </div>
              <div className='card w-[384px] h-[452px] rounded-lg border border-[#E0E7FF] shadow-card'>
                <div>
                  <img src={ImageCard6} alt="Gambar Artikel" className='rounded-t-lg'/>
                </div>
                <div className='p-4 grid gap-4'>
                  <div className='font-century text-[24px] leading-[30px] text-[#262626]'>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                  </div>
                  <div>
                    <p className='font-inter font-normal text-base text-[#6B7280] line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.</p>
                  </div>
                  <div className='text-xs font-inter font-normal text-[#6B7280]'>
                    <p>31 January 2030</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center mt-3'>
              <div className='flex gap-6 h-[28px]'>
                <button><img src={VectorGrayLeft} alt="" /></button>
                <li className='list-none flex gap-4 text-[#008CB2] font-semibold font-inter text-base'>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button>5</button>
                </li>
                <button><img src={VectorBlueRight} alt=""/></button>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Education