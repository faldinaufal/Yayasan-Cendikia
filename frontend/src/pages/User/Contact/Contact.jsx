import React from 'react'
import { Navbar, Footer } from '../../../components'
import { profile } from '../../../assets/image'
import bag from '../../../assets/Icon/bag.svg'
import {FaCalendarAlt} from 'react-icons/fa'

const Contact = () => {
  const cookies = new Cookies()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [description, setDescription] = useState()
  const navigate = useNavigate()

  const jwttoken = cookies.get('token')

  useEffect(() => { 
    if(!jwttoken){
      return (navigate("/"))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[jwttoken])

  const Post = async () => {
    try {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/consultations`,
        data: {
          "data": {
            Name: name,
            Email: email,
            phoneNumber: phoneNumber,
            Description : description
          }
        },
        headers: {
          Authorization: `Bearer ${jwttoken}`
        },
      })
      console.log("Berhasil Mengirim Pesan")
      window.location.reload(false);
    } catch (error) {
        console.log(error)
    }
  }

  function abc() {
    var element = document.getElementById("button");
    if (email != null && name != null && phoneNumber!= null && description != null) {
        element.style.backgroundColor = "#009FCC"; 
        element.style.color = "#FFFFFF";
        element.addEventListener("mouseout", function(){
            this.style.backgroundColor = "#009FCC";
            this.style.color = "#FFFFFF"
        })
        element.addEventListener("mouseover", function(){
            this.style.backgroundColor = "#9CA3AF";
            this.style.color = "#6B7280"
        })
    }
  }
  abc()

  return (
    <section>
        <Navbar/>
        <div className='container my-12'>
            <p className='font-century text-[40px] text-center sm:text-[48px] font-700'>Konsultasi</p>
            <div className='flex items-center justify-center gap-6 my-4 flex-wrap'>
                <div className='flex flex-col p-2 items-center rounded-md w-[350px] sm:w-[450px] lg:w-[350px] border-[1.5px] border-gray-300'>
                    <img src={profile} alt={profile} className='w-24 h-24 rounded-full'/>
                    <div className='w-full text-center text-gray2 font-inter'>
                        <p className='text-dark font-600 text-[20px]'>dr. Lorem Ipsum</p>
                        <p>Keahlian Lorem</p>
                        <div className='flex items-center gap-3 justify-center my-2'>
                            <img src={bag} alt={bag} />
                            <span>6 Tahun</span>
                        </div>
                        <div className='flex items-center gap-3 justify-center'>
                            <FaCalendarAlt/>
                            <span className='font-600'>Senin-Rabu 07:00-11:00</span>
                        </div>
                    </div>
                </div>
                <form action="" className='w-[384px] sm:w-[450px] lg:w-[384px]'>
                    <div className='p-6 grid gap-10 bg-[#E0E7FF] rounded-lg lg:mx-0'>
                        <div className='grid gap-4'>
                            <div className='grid gap-1'>
                                <p className='font-inter font-semibold text-base text-Text-Title'>Nama</p>
                                <input type="text" placeholder='Nama' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200'/>
                            </div>
                            <div className='grid gap-1'>
                                <p className='font-inter font-semibold text-base text-Text-Title'>Email</p>
                                <input type="email" placeholder='Email' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200 focus:invalid:outline-pink-600 invalid:text-pink-600 invalid:border-pink-600'/>
                            </div>
                            <div className='grid gap-1'>
                                <p className='font-inter font-semibold text-base text-Text-Title'>Nomor Whatsapp</p>
                                <input type="text" placeholder='Nomor Whatsapp' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200'/>
                            </div>
                            <div className='grid gap-1'>
                                <p className='font-inter font-semibold text-base text-Text-Title'>Deskripsi</p>
                                <textarea type="text" placeholder='Deskripsi' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-[180px] focus:outline-2 focus:outline-blue-500 duration-200'/>
                            </div>
                            <button type='button' className='bg-[#9CA3AF] text-[#6B7280] duration-200 hover:bg-[#009FCC] hover:text-white rounded-[4px] text-center py-3'>
                                <p className='font-inter text-base font-semibold '>Kirim</p>
                            </button>
                        </div>
                    </div>
                </form>
                <button id='button' type='button' onClick={Post} className='bg-[#9CA3AF] text-[#6B7280] duration-200 hover:bg-[#009FCC] hover:text-white rounded-[4px] text-center py-3'>
                  <p className='font-inter text-base font-semibold '>Kirim</p>
                </button>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Contact