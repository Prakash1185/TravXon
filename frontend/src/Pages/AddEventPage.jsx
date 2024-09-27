import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AddEventButton, SubmitButton, ViewButton } from '../Components/Buttons'
import AdminSidebar from '../Components/AdminSidebar'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { handleError, handleSuccess } from './../Components/ToastMessage';

const AddEventPage = () => {

  const [tripInfo, setTripInfo] = useState({
    image: "",
    title: "",
    about: "",
    tripPrice: "",
    description: "",
    startDate: "",
    endDate: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyTripInfo = { ...tripInfo };
    copyTripInfo[name] = value;
    setTripInfo(copyTripInfo)

  }

  const handleTripSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${BACKEND_URL}/action/addTrip`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        },
        body: JSON.stringify(tripInfo)
      })

      const result = await response.json()
      const { success, error, message } = result
      if (success) {
        handleSuccess(message)
        setTripInfo({
          image: "",
          about: "",
          description: "",
          title: "",
          tripPrice: "",
          startDate: "",
          endDate: "",
        })
      } else if (!success) {
        handleError(message)
      } else if (error) {
        handleError(error)
      }
    } catch (error) {
      handleError("Something went wrong")
    }
  }

  return (
    <>
      <AdminSidebar />
      <div className='lg:w-[80%] md:w-[70%]    w-[90%] mx-auto md:ml-[30%] lg:ml-[20%]'>

        <div className='w-[48rem] mx-auto mt-7 h-fit bg-bgColor rounded-md border-yColor border  my-2'>
          <h1 className='text-3xl font-medium text-center pt-2'>Add Event</h1>

          <form className='flex flex-col px-4 gap-2 py-4' onSubmit={handleTripSubmit}>

            <input type="text" placeholder='Image Link' className=' px-2 py-2 rounded-sm outline-none border-none bg-opacity-50 bg-gray-900' value={tripInfo.image} autoComplete='off' onChange={handleChange} name='image' />

            <input type="text" placeholder='Trip Title' className=' px-2 py-2 rounded-sm outline-none border-none bg-opacity-50 bg-gray-900' value={tripInfo.title} autoComplete='off' onChange={handleChange} name='title' />

            <input type="text" placeholder='Little about trip here' className=' px-2 py-2 rounded-sm outline-none border-none bg-opacity-50 bg-gray-900' value={tripInfo.about} autoComplete='off' onChange={handleChange} name='about' />

            <div className='flex justify-around'>
              <div className='flex items-center gap-2'>
                <label htmlFor="event">Start date:</label>
                <input type="date" className='outline-none border-none bg-opacity-50 bg-gray-900 px-1 py-1 rounded-md' autoComplete='off' value={tripInfo.startDate} onChange={handleChange} name='startDate' ></input>
              </div>

              <div className='flex items-center gap-2'>
                <label htmlFor="event">End date:</label>
                <input type="date" className='outline-none border-none bg-opacity-50 bg-gray-900 px-1 py-1 rounded-md' autoComplete='off' value={tripInfo.endDate} onChange={handleChange} name='endDate' ></input>
              </div>

              <input type="text" placeholder='Trip Price' className=' px-2 py-2 rounded-sm outline-none border-none bg-opacity-50 bg-gray-900 ' value={tripInfo.tripPrice} autoComplete='off' onChange={handleChange} name='tripPrice' />

            </div>

            <textarea className='outline-none border-none bg-opacity-50 px-2 bg-gray-900' rows={8} placeholder='Complete details about trip' value={tripInfo.description} autoComplete='off' onChange={handleChange} name='description'></textarea>
            <div className='flex items-center justify-center'>
              <AddEventButton text={"Add event"} />
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default AddEventPage
