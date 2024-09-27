import React from 'react'
import { ViewButton } from './Buttons';
import { Link } from 'react-router-dom';

const TripAndHotelBox = () => {
  return (
    <>
      <div className='w-[20rem] h-[26rem] bg-bgColor rounded-md border-yColor border  my-2'>
        <img src={"https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="about image" className='w-[19rem] h-[12rem] object-cover mx-auto py-2 rounded-xl' />
        <h1 className='text-xl font-semibold text-center'>EUROPE TRIP - 7 days</h1>
        <p className='text-sm text-start px-3 py-1 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aut ea. Deserunt quo unde ducimus.</p>
        <div className='text-start pl-3'>
          <p className='text-lg'><span className='text-yColor font-medium'>Start</span> - {"date here"}</p>
          <p className='text-lg'><span className='text-yColor font-medium'>End</span> - {"date here"}</p>
        </div>
        <div className='flex justify-center py-2'>
          <Link to={"/event/:id"}><ViewButton text={"More"} /></Link>
        </div>
      </div>
    </>
  )
}

export default TripAndHotelBox