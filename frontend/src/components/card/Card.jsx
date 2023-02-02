import React from 'react'

const Card = ({index}) => {

    function formatMyDate(value) {
        var options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(value).toLocaleDateString("en-GB", options);
    }

    return (
        <a href={`/${process.env.REACT_APP_EDU}/${index.attributes.Categories}/${index.attributes.Title}`}>
            <div className='rounded-lg w-[384px] h-[453px] mx-auto relative shadow-card sm:w-[430px] sm:h-[480px] lg:h-[452px] lg:w-[384px]'>
                <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
                    <img src={process.env.REACT_APP_API_URL+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='w-[384px] rounded-t-lg h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
                </div>
                <div className='w-full text-center mx-auto sm:text-start sm:w-[430px] lg:w-[384px]'>
                    <p className='font-century font-700 text-[23px] mx-4 leading-[30px] my-4 sm:mx-4 sm:text-2xl'>{index?.attributes.Title}</p>  
                    <p className='limit-content font-inter font-400 text-gray2 leading-6 mx-4'>{index.attributes.Body}</p>
                </div>
                <div className='my-4 mx-9 sm:m-4'>
                    <p className='font-inter text-[12px] text-gray2'>{formatMyDate(index?.attributes.createdAt)}</p>
                </div>
            </div>
        </a> 
    )
}

export default Card