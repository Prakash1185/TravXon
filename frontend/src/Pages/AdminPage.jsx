import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import { YellowBgButton } from '../Components/Buttons'
import { Link } from 'react-router-dom'

const AdminPage = () => {
  return (
    <div>
      <AdminSidebar/>
      <div className='lg:w-[80%] md:w-[70%]    w-[90%] mx-auto md:ml-[30%] lg:ml-[20%]'>
        <div className='w-[90%] h-fit py-2 bg-bgColor border-gray-500 border-opacity-50 px-3 flex items-center gap-2 border mx-auto  text-3xl'>
         Welcome to ADMIN Panel of Travxon
        </div>
      </div>
      <div className='flex flex-col items-center gap-3 py-12 justify-center md:hidden'>
        <Link to={"/add/event"}><YellowBgButton text='Add Trip'/></Link>
        <Link to={"/admin/trips"}><YellowBgButton text='All Trips'/></Link>
        <Link to={"/admin/users"}><YellowBgButton text='All Users'/></Link>
      </div>
    </div>
  )
}

export default AdminPage
