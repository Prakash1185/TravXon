import React from 'react'
import UserDetailsBox from '../Components/UserDetailsBox'
import AdminSidebar from './../Components/AdminSidebar';

const AdminUsersPage = () => {
  return (
    <>
      <AdminSidebar />
      <div className='lg:w-[80%] md:w-[70%]    w-[90%] mx-auto md:ml-[30%] lg:ml-[20%]'>

      <div className='w-[90%] mx-auto flex flex-col gap-2 py-3 '>
      <UserDetailsBox/>
      <UserDetailsBox/>
      <UserDetailsBox/>
      <UserDetailsBox/>
      <UserDetailsBox/>
      <UserDetailsBox/>
      </div>
        
      </div>

    </>
  )
}

export default AdminUsersPage
