import React from 'react'
import {MdWork} from 'react-icons/md'
import {FaCalendarAlt} from 'react-icons/fa'
import {AiFillLike} from 'react-icons/ai'

const TherapistCard = ({index}) => {
    return (
        <div>
            <a href={`/${index.terapisId.UID}/consultation`}>
                <div className='flex border-[1px] border-gray1 rounded-md w-[384px] h-[160px] p-[16px]'>
                    <img src={process.env.REACT_APP_API_URL+index.photoProfile.url} alt="Foto Profil" className='w-[80px] h-[80px] rounded-full'/>
                <div className='font-inter w-[264px] ml-2'>
                    <p className='text-lg font-600 text-dark'>{index.username}</p>
                    <p className='text-gray2'>{index.terapisId.Skill}</p>
                    <div className='text-gray2 text-[14px] font-600'>
                    <div className='flex items-center'>
                        <MdWork className='text-[17px] mr-2'/>
                        <p>{index.terapisId.Experiences}</p>
                    </div>
                    <div className='flex items-center'>
                        <AiFillLike className='text-[17px] mr-2'/>
                        <p>4.9/5</p>
                    </div>
                    <div className='flex items-center'>
                        <FaCalendarAlt className='text-[17px] mr-2'/>
                        <p>Senin-Rabu 07:00-11:00</p>
                    </div>
                    </div>
                </div>
                </div>
            </a>
        </div>
    )
}

export default TherapistCard