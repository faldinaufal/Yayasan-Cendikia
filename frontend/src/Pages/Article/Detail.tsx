import React, {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import profileNeymar from '../../Asset/Image/profile-neymar.jpg'

const Detail = () => {
    const [openPopUp, setOpenPopUp] = useState(true)
    const closePopUp = () => setOpenPopUp(false)
  return (
    <>
    {openPopUp && (<div className='detail fixed top-0 left-0 bottom-0 right-0'>
        <div className='detail-content overflow-auto mt-10 shadow-white shadow-sm w-96 bg-profile rounded-xl md:w-3/5 mx-auto'>
            <div className='mt-3 cursor-pointer'>
                <AiOutlineClose className='ml-auto mr-2 text-20 text-white' onClick={closePopUp}/>
            </div>
            <p className='text-center font-poppins text-25 font-extrabold text-white'>Cristiano Ronaldo</p>
            <div className='mt-3 w-96 h-52 mx-auto'>
                <img src={profileNeymar} alt={profileNeymar} className='px-3 w-96 h-52'/>
            </div>
            <div className='mt-2 pb-3 px-3 font-poppins text-15 text-justify tracking-tighter text-white'>
                <p>Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team</p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus et perferendis sequi aut voluptate iusto corrupti, deserunt delectus quis asperiores consequatur labore, excepturi assumenda quod alias soluta veniam voluptatem blanditiis!
            </div>
        </div>
    </div>)}
    </>
  )
}

export default Detail