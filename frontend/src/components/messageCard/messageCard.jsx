import React from 'react'
// import {AiOutlineClose} from 'react-icons/ai'

const MessageCard = ({data}) => {
    return (
        <div>
          <p className='font-inter text-[32px] font-700 pb-8 text-[#009FCC]'>Pesan Terapi</p>
          <div className='grid grid-cols-3 gap-16'>
            {data.attributes.therapies.data.map((item) => {
              return (
                <div className='shadow-card rounded-md w-[288px]'>
                  <div className='mx-2 relative py-2 font-inter text-center'>
                    {/* <button className='text-xl absolute right-1 duration-200 opacity-60'><AiOutlineClose/></button> */}
                    <div className='font-600 mt-2'>
                      <p>{item.attributes.name}</p>
                      {/* <p className='my-1'>{item.attributes.email}</p>
                      <a href="/" className='duration-200 hover:opacity-60'>{item.attributes.phoneNumber}</a> */}
                    </div>
                    {/* <div className='text-start mt-1'>
                      <p className='font-600'>Deskripsi : </p>
                      <p>{item.attributes.description}</p>
                    </div> */}
                  </div>
                </div>
              )
            })}
          </div>
          <p className='font-inter text-[32px] font-700 py-8 text-[#009FCC]'>Pesan Konsultasi</p>
          <div className='grid grid-cols-3 gap-16'>
            {data.attributes.consultations.data.map((item) => {
              return (
                <div className='shadow-card rounded-md w-[288px]'>
                  <div className='mx-2 relative py-2 font-inter text-center'>
                    {/* <button className='text-xl absolute right-1 duration-200 opacity-60'><AiOutlineClose/></button> */}
                    <div className='font-600 mt-2'>
                      <p>{item.attributes.name}</p>
                      <p className='my-1'>{item.attributes.email}</p>
                      <a href="/" className='duration-200 hover:opacity-60'>{item.attributes.phoneNumber}</a>
                    </div>
                    <div className='text-start mt-1 px-4'>
                      <p className='font-600'>Deskripsi : </p>
                      <p>{item.attributes.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    )
}

export default MessageCard