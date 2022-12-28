import React from 'react'
import { Link } from 'react-router-dom'
import {Footer} from '../../components'
import {FaChevronRight, FaCalendarAlt} from 'react-icons/fa'
import {AiFillEye} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsYoutube, BsInstagram} from 'react-icons/bs'
import {artikel1} from '../../assets/image'

const DetailEvnt = () => {
  return (
    <section className='w-full bg-white'>
      <div className='container mb-20'>
        <div className='flex items-center font-inter font-600 mt-10 mb-6'>
          <p className='text-[#009FCC] mr-[15.33px]'>Pusat Edukasi</p>
          <FaChevronRight className='text-gray1'/>
          <p className='text-[#009FCC] ml-[14.67px] mr-[15.33px]'>Acara & Kegiatan</p>
          <FaChevronRight className='text-gray1'/>
          <p className='text-gray2 ml-[14.67px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <p className='font-century font-700 text-5xl text-dark mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className='flex items-center text-gray2 font-inter font-400'>
          <FaCalendarAlt className='mr-1 text-[#1A1A1A]'/>
          <p className='mr-3'>31 January 2030</p>
          <AiFillEye className='mr-1'/>
          <p>1234x dibaca</p>
        </div>
        <img src={artikel1} alt={artikel1} className='w-[1200px] h-[600px] rounded-2xl my-6'/>
        <p className='font-inter text-[18px] leading-7 text-dark'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan. Pellentesque nec aliquet dui. Aliquam pharetra odio sit amet risus tristique sollicitudin. Ut venenatis risus vel tellus dictum tincidunt. Nam rhoncus pellentesque nulla sit amet pretium. Integer lectus massa, consequat ut neque non, lobortis ornare elit. Sed commodo aliquet odio non malesuada. Proin semper, velit sit amet placerat laoreet, leo nibh tristique massa, ut pharetra nisi nibh vitae augue. Integer et convallis nisi.
          Nulla euismod, elit vel accumsan posuere, eros nulla ultricies libero, ac tincidunt magna diam et ligula. Pellentesque vitae ultricies mi. Vestibulum ac laoreet felis. Cras tempor lectus at vehicula condimentum. Nam sed mi in magna egestas efficitur eget et risus. Aenean quis elit sodales, dignissim diam eu, scelerisque tellus. Mauris pharetra libero a lacus condimentum, ac auctor ipsum convallis. Proin varius tempor eros, sed pellentesque nulla gravida ac. Sed porta gravida lorem ac dictum. In at velit at sapien sagittis sagittis. Aenean scelerisque felis est, et pellentesque magna tincidunt ac.
        </p>
        <div className='flex justify-center my-6'>
          <img src={artikel1} alt={artikel1} className='w-[600px] h-[400px] rounded-lg'/>
        </div>
        <p className='font-inter text-[18px] leading-7 text-dark'>
          Curabitur luctus orci vel magna maximus, nec tristique tellus bibendum. In ut magna et elit gravida tempor. Duis vulputate ex ultrices felis dignissim dictum. Aliquam eu ultrices libero, vel vulputate ex. Etiam ante ante, vulputate et sapien at, lacinia porta nisl. In auctor nisi arcu, eu iaculis libero fermentum ac. Aliquam non sem faucibus, bibendum nunc a, porta ante. Donec vel tempor diam, nec consequat sapien. Aliquam erat volutpat. Sed at aliquet nisi. Nullam ullamcorper odio sem, non congue nisi efficitur vitae. In luctus tempor lacus, eget rhoncus risus viverra id. In gravida quam metus, sed scelerisque nisl tincidunt quis. Pellentesque venenatis, nunc et dignissim vulputate, mi orci vestibulum arcu, varius auctor sem lectus eget justo. Cras auctor porttitor velit, ac ultricies lorem sagittis vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Fusce mollis sollicitudin orci eget ullamcorper. Curabitur velit mauris, lobortis vitae pretium a, blandit et mi. Aliquam erat volutpat. Ut maximus finibus nisl, sit amet fermentum ante viverra quis. Nunc et consectetur lacus. Pellentesque nulla eros, tempus tincidunt ante ac, dictum facilisis dolor. Donec vel consectetur ex. Phasellus vehicula, ligula sit amet facilisis vestibulum, erat tellus convallis velit, sit amet scelerisque est lectus vitae odio. Vestibulum eu fermentum neque. Etiam at dapibus quam. Cras felis sapien, placerat quis vestibulum vel, dignissim eget enim. Duis consectetur vitae est id congue. Suspendisse in ex interdum, tincidunt erat vehicula, tristique arcu. Phasellus in metus eget odio pharetra eleifend pretium et quam.
          Nulla a tincidunt dui, nec pretium augue. Sed erat lectus, dictum et vehicula ut, sodales malesuada arcu. Vivamus vel neque mi. Donec maximus nibh quam, in congue enim suscipit sit amet. Donec vel dolor pharetra, efficitur leo quis, lacinia augue. Quisque eget ex mollis, dictum quam sed, tincidunt odio. Mauris accumsan sed odio sit amet ultricies. Sed posuere leo et feugiat feugiat. Etiam risus ligula, feugiat at nunc in, ullamcorper feugiat lacus. Phasellus ipsum lectus, gravida sed rhoncus et, fermentum ultricies ex. Aliquam mattis quam quis odio blandit, aliquam hendrerit nunc fringilla.
        </p>
        <div className='w-full border-[1px] bg-gray1 my-10'></div>
        <div className='flex items-center'>
          <p className='font-inter mr-4'>Bagikan</p>
          <a href="/" target={'_blank'} className='share-sosmed hover:bg-[#1877F2]'><FaFacebookF className='text-white'/></a>
          <a href="/" target={'_blank'} className='share-sosmed hover:bg-[#E4405F]'><BsInstagram className='text-white'/></a>
          <a href="/" target={'_blank'} className='share-sosmed hover:bg-[#1DA1F2]'><AiOutlineTwitter className='text-white'/></a>
          <a href="/" target={'_blank'} className='share-sosmed hover:bg-[#CD201F] '><BsYoutube className='text-white'/></a>
        </div>
        <div>
          <p className='font-century font-700 text-4xl text-dark mt-[46px] mb-2'>Lihat Juga</p>
          <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center mb-20'>
            <div className='w-[384px] shadow-md rounded-md shadow-black/40'>
              <div>
                <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] rounded-t-md'/>
              </div>
              <div className='w-[352px] mx-auto'>
                <Link to=''>
                  <p className='font-century font-700 text-2xl text-dark my-3 leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Link>
                <div className='font-inter text-gray2'>
                  <p className='leading-6 mb-2 limit-content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
                  </p>
                  <p className='text-[12px] pb-2'>31 January 2030</p>
                </div>
              </div>
            </div>
            <div className='w-[384px] shadow-md rounded-md shadow-black/40'>
              <div>
                <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] rounded-t-md'/>
              </div>
              <div className='w-[352px] mx-auto'>
                <Link to=''>
                  <p className='font-century font-700 text-2xl text-dark my-3 leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Link>
                <div className='font-inter text-gray2'>
                  <p className='leading-6 mb-2 limit-content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
                  </p>
                  <p className='text-[12px] pb-2'>31 January 2030</p>
                </div>
              </div>
            </div>
            <div className='w-[384px] shadow-md rounded-md shadow-black/40'>
              <div>
                <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] rounded-t-md'/>
              </div>
              <div className='w-[352px] mx-auto'>
                <Link to=''>
                  <p className='font-century font-700 text-2xl text-dark my-3 leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Link>
                <div className='font-inter text-gray2'>
                  <p className='leading-6 mb-2 limit-content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
                  </p>
                  <p className='text-[12px] pb-2'>31 January 2030</p>
                </div>
              </div>
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

export default DetailEvnt