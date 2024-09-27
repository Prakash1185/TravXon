import React, { useEffect, useState } from 'react'
import UserSideBar from './../Components/UserSideBar';
import { LogoutButton } from '../Components/Buttons';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from './../Components/ToastMessage';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const UserProfilePage = () => {

  const [userInfo, setUserInfo] = useState({}); 
  const navigate = useNavigate()

  const fetchSingleUserDetail = async () => {
    try {
        const userId = localStorage.getItem("userid"); // Get user ID from local storage
        const response = await fetch(`${BACKEND_URL}/user/getUserById`, {
            method: 'GET',
            headers: {
                Authorization: localStorage.getItem("token"),
                'Content-Type': 'application/json',
                'User-ID': userId // Add user ID in the headers
            },
        });
        const result = await response.json();
        const { singleUser, success, message } = result;
        if (success) {
            setUserInfo(singleUser);
        } else {
            handleError(message); // Show error message if user not found
        }
    } catch (error) {
        handleError(error);
    }
};


  useEffect(() => {
    fetchSingleUserDetail();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userid")
    handleSuccess("Logged out successfully")
    navigate("/login")
  }

  return (
    <>
      <UserSideBar />
      <div className='lg:w-[80%] md:w-[70%]    w-[90%] mx-auto md:ml-[30%] lg:ml-[20%]'>
        <div className='w-[90%] h-[4rem] bg-bgColor border-gray-500 border-opacity-50 px-3 flex items-center gap-2 border mx-auto mt-3 text-3xl'>
          Hello , <span className='font-semibold text-yColor '>{userInfo.name}</span>
        </div>
        <div className='w-[90%] h-[4rem] bg-bgColor border-gray-500 border-opacity-50 px-3 flex items-center  gap-2 border mx-auto mt-3 text-3xl'>
          <h1 className='text-lg'>Email : {userInfo.email}</h1>
        </div>
        <div className='w-[90%] h-[8rem] mx-auto   pt-56  '>
          <LogoutButton handleLogout={handleLogout}/>
        </div>
      </div>

    </>
  )
}

export default UserProfilePage