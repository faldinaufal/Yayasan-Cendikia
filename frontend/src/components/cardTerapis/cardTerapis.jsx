import React from 'react'
import {MdWork} from 'react-icons/md'
import {FaCalendarAlt} from 'react-icons/fa'
import ImgProfileDefault from '../../assets/image/noProfile2.jpg'

const TherapistCard = ({index}) => {
    var id = index.therapist.terapisId.toLowerCase()
    
    return (
        <div>
            <a href={`/${id}/consultation`}>
                <div className='flex border-[1px] border-gray1 rounded-md w-[384px] h-[160px] p-[16px]'>
                    {index.photoProfile == null ?
                        <img src={ImgProfileDefault} alt="Foto Profil" className='w-[80px] h-[80px] rounded-full mb-2'/> 
                    :
                        <img src={process.env.REACT_APP_API_URL+index.photoProfile.url} alt="Foto Profil" className='w-[80px] object-cover h-[80px] rounded-full mb-2'/>
                    }
                <div className='font-inter w-[264px] ml-2'>
                    <p className='text-lg font-600 text-dark'>{index.username}</p>
                    <p className='text-gray2'>{index.therapist.skill}</p>
                    <div className='text-gray2 text-[14px] font-600'>
                    <div className='flex items-center'>
                        <MdWork className='text-[17px] mr-2'/>
                        <p>{index.therapist.experience}</p>
                    </div>
                    <div className='flex items-center'>
                        <FaCalendarAlt className='text-[17px] mr-2'/>
                        <p>{index.therapist.jobTime}</p>
                    </div>
                    </div>
                </div>
                </div>
            </a>
        </div>
    )
}

export default TherapistCard