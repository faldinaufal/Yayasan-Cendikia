import React from 'react'
import { Footer } from '../../components'
import {artikel1} from '../../assets/image'

const EC = () => {
  return (
    <section className='bg-white'>
      <div className='w-95% mx-auto'>
        <div>
          <p className='font-century text-36 font-700 text-dark'>Artikel Ilmiah</p>
        </div>
        <div>
          <div className='rounded-lg w-340 shadow-md shadow-black/40'>
            <img src={artikel1} alt={artikel1} className='w-340 rounded-t-lg'/>
            <p className='font-century font-700 text-22 leading-30 w-80 mx-auto mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className='font-inter text-gray2 w-80 mx-auto mt-2 font-400'>
              <p className='text-16 leading-24'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='mt-2 text-12'>31 January 2030</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </section>
  )
}

export default EC