import React, { useEffect, useState } from 'react'
import UserDetailsBox from '../Components/UserDetailsBox'
import AdminSidebar from './../Components/AdminSidebar';
import { handleError } from '../Components/ToastMessage';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AdminUsersPage = () => {
  const [allUsersList, setAllUsersList] = useState([])
  const fetchAllUsers = async () => {
    try {
      const repsonse = await fetch(`${BACKEND_URL}/user/getAllUsers`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      const result = await repsonse.json()
      const { allUsers, success } = result
      setAllUsersList(allUsers)
    } catch (error) {
      handleError("Something went wrong")
    }
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])
  return (
    <>
      <AdminSidebar />
      <div className='lg:w-[80%] md:w-[70%]    w-[90%] mx-auto md:ml-[30%] lg:ml-[20%]'>

        <div className='w-[90%] mx-auto flex flex-col gap-2 py-3 '>
          {
            allUsersList && allUsersList.length > 0 ? (
              allUsersList.map((item, index) => {
                return (
                  <UserDetailsBox
                    key={index}
                    email={item.email}
                    joined={item.date}
                    username={item.name}
                    isAdmin={item.isAdmin}
                    _id={item._id}
                    fetchAllUsers={fetchAllUsers}
                  />
                );
              })
            ) : (
              <>
                <h1>No Users Found</h1>
              </>
            )
          }

        </div>

      </div>

    </>
  )
}

export default AdminUsersPage
