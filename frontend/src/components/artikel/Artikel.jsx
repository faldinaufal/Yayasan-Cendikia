import React from 'react'
import axios from ''

const Artikel = () => {
  return (
    <div>
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
    </div>
  )
}

export default Artikel