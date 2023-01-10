import React from 'react'
import {Footer, Navbar} from '../../../components'
import Detail from '../../../components/detail/Detail'


const DetailAEC = () => {
  return (
    <section className='w-full bg-white'>
      <nav>
        <Navbar/>
      </nav>
      <div className='container mb-20'>
        <Detail/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </section>
  )
}

export default DetailAEC