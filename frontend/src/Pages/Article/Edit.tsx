import React, {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const Edit = () => {
    const [openPopUp, setOpenPopUp] = useState(true)
    const closePopUp = () => setOpenPopUp(false)
  return (
    <>
    {openPopUp && (<div className='detail fixed top-0 left-0 bottom-0 right-0'>
        <div className='detail-content background-edit overflow-auto mt-10 shadow-white shadow-sm w-96 rounded-xl md:w-5/12 mx-auto'>
            <div className='mt-3 cursor-pointer'>
                <AiOutlineClose className='ml-auto text-20 mr-2 text-white' onClick={closePopUp}/>
            </div>
            <p className='text-center font-poppins text-25 font-bold tracking-tighter text-white border-b-1 border-white'>Edit Artikel</p>
            <form className='mt-3 mx-5'>
                <div>
                    <label htmlFor="judul" className='font-poppins text-white text-16'>Judul</label><br />
                    <input type="text" id='judul' placeholder='Judul' className='text-white background-edit px-2 py-1 rounded-md outline-1 outline-blue-400 w-full'/>
                </div>
                <div className='mt-2'>
                    <label htmlFor="deskripsi" className='font-poppins text-white text-16'>Deskripsi</label><br />
                    <textarea id="deskripsi" placeholder='Deskripsi' className='text-white background-edit px-2 py-1 rounded-md outline-1 outline-blue-400 w-full resize-none h-52'></textarea>
                </div>
                <div className='mt-2'>
                    <label htmlFor="gambar" className='font-poppins text-white text-16'>Gambar</label><br />
                    <input type="file" id='gambar' className='background-edit ml-2'/>
                </div>
                <div className='my-3'>
                    <button className='bg-button font-poppins py-1 px-3 rounded-md text-white duration-200 hover:opacity-80'>Simpan</button>
                </div>
            </form>
        </div>
    </div>)}
    </>
  )
}

export default Edit