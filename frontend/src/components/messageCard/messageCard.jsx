import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const MessageCard = ({data}) => {
    return (
        <div>
            <div className='shadow-card rounded-md w-[288px]'>
                <div className='mx-2 relative py-2 font-inter text-center'>
                    <button className='text-xl absolute right-1 duration-200 opacity-60'><AiOutlineClose/></button>
                    <div className='font-600 mt-2'>
                        <p>{data.attributes.name}</p>
                        <p className='my-1'>{data.attributes.email}</p>
                        <a href="/" className='duration-200 hover:opacity-60'>{data.attributes.phoneNumber}</a>
                    </div>
                    <div className='text-start mt-1'>
                        <p className='font-600'>Deskripsi : </p>
                        <p>{data.attributes.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageCard