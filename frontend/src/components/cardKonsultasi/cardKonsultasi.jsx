import React from 'react'
import {MdWork} from 'react-icons/md'
import {FaCalendarAlt} from 'react-icons/fa'
import ImgProfileDefault from '../../assets/image/noProfile2.jpg'

const ConsultationCard = ({index}) => {
  // var id = index.username.replace(/\s+/g, '-').toLowerCase()

  return (
    <div>
      <a href={`/${index.slug}/consultation`}>
        <div className='flex flex-col items-center border-[1px] border-gray1 rounded-md w-[284px] p-[16px]'>
          {index.photoProfile == null ?
            <img src={ImgProfileDefault} alt="Foto Profil" className='w-[80px] h-[80px] rounded-full mb-2'/> 
          :
            <img src={process.env.REACT_APP_API_URL+index.photoProfile.url} alt="Foto Profil" className='w-[80px] h-[80px] rounded-full mb-2'/>
          }
          <p className='font-inter font-600 text-[18px] text-dark mb-1'>{index.username}</p>
          <p className='font-inter text-gray2 my-1'>{index.therapist.skill}</p>
          <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
            <MdWork className='mr-[9.67px] text-[17px]'/>
            <p>{index.therapist.experience}</p>
          </div>
          <div className='font-inter text-[14px] flex items-center text-gray2'>
            <FaCalendarAlt className='mr-[9.67px] text-[17px]'/>
            <p>{index.therapist.jobTime}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ConsultationCard