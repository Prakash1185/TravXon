import React, { useEffect, useState } from 'react'
import { handleError, handleSuccess } from './ToastMessage';
import { Link } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const TripDetailBox = ({ title, about, startDate, endDate, tripPrice, _id, fetchAllTrips }) => {

  const [isDeleted, setIsDeleted] = useState(false)

  const deleteFunc = async (_id) => {
    try {
      const response = await fetch(`${BACKEND_URL}/action/deleteTrip/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token")
        },
      })
      setIsDeleted(true)
      const result = await response.json()
      const { success, message } = result
      if (success) {
        handleSuccess(message)
      } else if (!success) {
        handleError(message)
      }
    } catch (error) {
      handleError(error)
    }
  }

  useEffect(()=>{
    if(isDeleted){
      fetchAllTrips()
    }
  },[isDeleted,fetchAllTrips])
  return (
    <>
      <div className=' border border-yColor  bg-bgColor  px-3 py-2'>
        <h1>Title : {title}</h1>
        <p>About : {about}</p>
        <p>Start : {startDate}</p>
        <p>End : {endDate}</p>
        <p>Price : ₹ {tripPrice}</p>
        {/* //TODO:: <p>Total Enrolled: {joined}</p> */}

        <div className='flex gap-2 py-2 pt-4'>
         <Link to={`/edit/event/${_id}`}> <button className='py-1 px-3 bg-blue-950 bg-opacity-80 text-blue-200'>Edit</button></Link>
          <button onClick={()=>deleteFunc(_id)} className='py-1 px-3 bg-red-950 bg-opacity-80 text-red-200'>Delete</button>
        </div>
      </div>
    </>
  )
}

export default TripDetailBox
