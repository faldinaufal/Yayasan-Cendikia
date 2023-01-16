import React from 'react'

const Card = ({index}) => {
    return (
        <a href={`/${process.env.REACT_APP_EDU}/${index.attributes.Categories}/${index.attributes.Title}`}>
            <div className='rounded-lg h-[452px] w-[384px] relative shadow-card sm:w-[430px] lg:w-[384px]'>
                <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
                    <img src={`http://localhost:1337`+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
                </div>
                <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
                    <p className='font-century font-700 text-2xl leading-[30px] my-4'>{index?.attributes.Title}</p>  
                    <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>{index.attributes.Body}</p>
                </div>
                <div className='absolute bottom-0 px-4 py-4'>
                    <p className='font-inter text-[12px] text-gray2 pb-2'>{index?.attributes.createdAt}</p>
                </div>
            </div>
        </a> 
    )
}

export default Card