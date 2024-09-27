import React from 'react'
import AdminSidebar from './../Components/AdminSidebar';
import { AddEventButton, EditEventButton } from './../Components/Buttons';

const EditEventPage = () => {
  return (
    <>
      <AdminSidebar />
      <div className='lg:w-[80%] md:w-[70%]    w-[90%] mx-auto md:ml-[30%] lg:ml-[20%]'>

        <div className='w-[48rem] mx-auto mt-7 h-fit bg-bgColor rounded-md border-yColor border  my-2'>
        <h1 className='text-3xl font-medium text-center pt-2'>Edit Event</h1>
          <div className='flex flex-col px-4 gap-2 py-4'>
            <input type="text" placeholder='Image Link' className=' px-2 py-2 rounded-sm outline-none border-none bg-opacity-50 bg-gray-900' />
            <input type="text" placeholder='Trip Title' className=' px-2 py-2 rounded-sm outline-none border-none bg-opacity-50 bg-gray-900' />
            <input type="text" placeholder='Short title here' className=' px-2 py-2 rounded-sm outline-none border-none bg-opacity-50 bg-gray-900' />
            <div className='flex justify-around'>
              <div className='flex items-center gap-2'>
                <label for="event">Start date:</label>
                <input type="date" className='outline-none border-none bg-opacity-50 bg-gray-900 px-1 py-1 rounded-md' min="2024-01-01" ></input>
              </div>
              <div className='flex items-center gap-2'>
                <label for="event">End date:</label>
                <input type="date" className='outline-none border-none bg-opacity-50 bg-gray-900 px-1 py-1 rounded-md' min="2024-01-01" ></input>
              </div>
              <input type="text" placeholder='Trip Price' className=' px-2 py-2 rounded-sm outline-none border-none bg-opacity-50 bg-gray-900 ' />
            </div>
            <textarea className='outline-none border-none bg-opacity-50 px-2 bg-gray-900' rows={8} placeholder='Complete details about trip'></textarea>
           <div className='flex items-center justify-center'>
           <EditEventButton text={"Edit & Save"}/>
           </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default EditEventPage
