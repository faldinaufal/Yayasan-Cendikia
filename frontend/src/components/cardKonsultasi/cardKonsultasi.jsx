import React from 'react'
import {MdWork} from 'react-icons/md'
import {FaCalendarAlt} from 'react-icons/fa'

const ConsultationCard = ({index}) => {
    return (
        <div>
            <a href={`/${index.terapisId.UID}/consultation`}>
                <div className='flex flex-col items-center border-[1px] border-gray1 rounded-md w-[284px] h-[248px] p-[16px]'>
                    <img src={process.env.REACT_APP_API_URL+index.photoProfile.url} alt="Foto Profil" className='w-[80px] h-[80px] rounded-full mb-2'/>
                    <p className='font-inter font-600 text-[18px] text-dark mb-1'>{index.username}</p>
                    <p className='font-inter text-gray2'>{index.terapisId.Skill}</p>
                    <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                    <MdWork className='mr-[9.67px] text-[17px]'/>
                    <p>{index.terapisId.Experiences}</p>
                    </div>
                    <div className='font-inter text-[14px] flex items-center text-gray2'>
                    <FaCalendarAlt className='mr-[9.67px] text-[17px]'/>
                    <p>Senin-Rabu 07:00-11:00</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ConsultationCard