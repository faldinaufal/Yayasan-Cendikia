import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const MessageCard = () => {
    return (
        <div>
            <div className='shadow-card rounded-md w-[288px]'>
                <div className='mx-2 relative py-2 font-inter text-center'>
                    <button className='text-xl absolute right-1 duration-200 opacity-60'><AiOutlineClose/></button>
                    <div className='font-600 mt-2'>
                        <p>Wyero JR</p>
                        <p className='my-1'>Wyero@gmail.co.id</p>
                        <a href="/" className='duration-200 hover:opacity-60'>08122233344</a>
                    </div>
                    <div className='text-start mt-1'>
                        <p className='font-600'>Deskripsi : </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio alias, adipisci nemo ipsa eaque cumque, facilis accusantium deleniti dolore quia, aspernatur fugit nam perferendis iusto facere expedita quam id!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageCard