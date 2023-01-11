import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({index}) => {
    return (
        <Link to={`/artikel-ilmiah/${index.attributes.Title}`}>
        <div className='w-[384px] h-[452px] rounded-lg border border-[#E0E7FF] shadow-card'>
            <div>
                <img src={`http://localhost:1337`+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='rounded-t-lg'/>
            </div>
            <div className='p-4 grid gap-4'>
                <div className='font-century text-[24px] leading-[30px] text-[#262626]'>
                   <h4>{index?.attributes.Title}</h4>
                </div>
                <div>
                    <p className='font-inter font-normal text-base text-[#6B7280] line-clamp-3'>{index.attributes.Body}</p>
                </div>
                <div className='text-xs font-inter font-normal text-[#6B7280]'>
                <p>{index?.attributes.createdAt}</p>
                </div>
            </div>
        </div>
        </Link> 
    )
}

export default Card