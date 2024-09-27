import React, { useEffect, useState } from 'react'
import AdminSidebar from './../Components/AdminSidebar';
import { AddEventButton, EditEventButton } from './../Components/Buttons';
import { useNavigate, useParams } from 'react-router-dom';
import { handleError, handleSuccess } from '../Components/ToastMessage';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const EditEventPage = () => {

  const [tripInfo, settripInfo] = useState({
    image: "",
    about: "",
    description: "",
    title: "",
    tripPrice: "",
    startDate: "",
    endDate: "",
  })

  const { id } = useParams()
  const navigate = useNavigate()

  const fetchSingleTrip = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/action/getTripById/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      const result = await response.json()
      const { singleTrip } = result
      // Format the date to yyyy-MM-dd before setting it in state
      singleTrip.startDate = new Date(singleTrip.startDate).toISOString().split('T')[0];
      singleTrip.endDate = new Date(singleTrip.endDate).toISOString().split('T')[0];
      settripInfo(singleTrip)
    } catch (error) {
      handleError("Something went wrong")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const copyTripInfo = { ...tripInfo }
    copyTripInfo[name] = value
    settripInfo(copyTripInfo)
  }
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}/action/updateTrip/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(tripInfo),
      });
  
      const result = await response.json();
      const { success, message } = result;
  
      if (success) {
        handleSuccess(message);
        navigate('/admin/trips'); // Navigate to trips page after successful update
      } else {
        handleError(message); // Display error message if update fails
      }
    } catch (error) {
      handleError("An error occurred while updating the trip");
    }
  };
  

  useEffect(() => {
    fetchSingleTrip()
  }, [])

  return (
    <>
      <AdminSidebar />
      <div className='lg:w-[80%] md:w-[70%]    w-[90%] mx-auto md:ml-[30%] lg:ml-[20%]'>

        <div className='w-[48rem] mx-auto mt-7 h-fit bg-bgColor rounded-md border-yColor border  my-2'>
          <h1 className='text-3xl font-medium text-center pt-2'>Edit Event</h1>
          <form className='flex flex-col px-4 gap-2 py-4' onSubmit={handleUpdateSubmit}>
            <input type="text" placeholder='Image Link' className=' px-2 py-2 rounded-sm outline-none border-none bg-opacity-50 bg-gray-900' value={tripInfo.image} autoComplete='off' onChange={handleChange} name='image' />

            <input type="text" placeholder='Trip Title' className=' px-2 py-2 rounded-sm outline-none border-none bg-opacity-50 bg-gray-900' value={tripInfo.title} autoComplete='off' onChange={handleChange} name='title' />

            <input type="text" placeholder='Short title here' className=' px-2 py-2 rounded-sm outline-none border-none bg-opacity-50 bg-gray-900' value={tripInfo.about} autoComplete='off' onChange={handleChange} name='about' />

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
              <EditEventButton text={"Edit & Save"} />
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default EditEventPage
