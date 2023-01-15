import React, {useState} from 'react'
import noProfile2 from '../../assets/image/noProfile2.jpg'

const ImageProfile = () => {
  const [image, setImage] = useState(noProfile2)
  return (
    <div>
        <img src={image} alt='Profil' className='rounded-full'/>
    </div>
  )
}

export default ImageProfile