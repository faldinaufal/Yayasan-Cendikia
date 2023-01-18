import React from 'react'

const ImageProfile = ({image}) => {
  return (
    <div>
        <img src={image} alt='Profil' className='rounded-full object-cover'/>
    </div>
  )
}

export default ImageProfile