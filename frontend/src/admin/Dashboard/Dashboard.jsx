import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import NavAdmn from '../../components/navadmn/NavAdmn'

const Dashboard = () => {
  return (
    <section className='flex bg-admin'>
      <Sidebar/>
      <div className='w-full'>
        <div className='w-[92%] mx-auto'>
          <nav>
            <NavAdmn/>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Dashboard