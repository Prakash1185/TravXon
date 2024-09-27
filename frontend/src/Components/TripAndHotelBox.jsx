import React from 'react'
import { ViewButton } from './Buttons';
import { Link } from 'react-router-dom';

const TripAndHotelBox = ({imageLink,title,about,startDate,endDate,id}) => {
  return (
    <>
      <div className='w-[20rem] h-[26rem] bg-bgColor rounded-md border-yColor border  my-2'>
        <img src={imageLink} alt="about image" className='w-[16rem] md:w-[19rem] h-[12rem] object-cover mx-auto py-2 rounded-xl' />
        <h1 className='text-xl font-semibold text-center'>{title}</h1>
        <p className='text-sm text-start px-3 py-1 pb-2'>{about}</p>
        <div className='text-start pl-3'>
          <p className='text-lg'><span className='text-yColor font-medium'>Start</span> - {startDate}</p>
          <p className='text-lg'><span className='text-yColor font-medium'>End</span> - {endDate}</p>
        </div>
        <div className='flex justify-center py-2'>
          <Link to={`/event/${id}`}><ViewButton text={"More"} /></Link>
        </div>
      </div>
    </>
  )
}

export default TripAndHotelBox