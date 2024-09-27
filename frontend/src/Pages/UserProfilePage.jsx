import React from 'react'
import UserSideBar from './../Components/UserSideBar';
import { LogoutButton } from '../Components/Buttons';

const UserProfilePage = () => {
  return (
    <>
      <UserSideBar />
      <div className='lg:w-[80%] md:w-[70%]    w-[90%] mx-auto md:ml-[30%] lg:ml-[20%]'>
        <div className='w-[90%] h-[4rem] bg-bgColor border-gray-500 border-opacity-50 px-3 flex items-center gap-2 border mx-auto mt-3 text-3xl'>
          Hello , <span className='font-semibold text-yColor '>Prakash Kumar</span>
        </div>
        <div className='w-[90%] h-[4rem] bg-bgColor border-gray-500 border-opacity-50 px-3 flex items-center  gap-2 border mx-auto mt-3 text-3xl'>
          <h1 className='text-lg'>Email : mail@mail.com</h1>
        </div>
        <div className='w-[90%] h-[8rem] mx-auto   pt-56  '>
          <LogoutButton />
        </div>
      </div>

    </>
  )
}

export default UserProfilePage