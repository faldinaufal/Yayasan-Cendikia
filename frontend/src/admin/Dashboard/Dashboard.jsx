import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import UserLogin from '../../components/userLogin/UserLogin'

const Dashboard = () => {
  return (
    <section className='flex bg-admin'>
      <Sidebar/>
      <div className='w-full'>
        <div className='w-[92%] mx-auto'>
          <nav>
            <UserLogin/>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Dashboard