import React from 'react'
import TripAndHotelBox from './../Components/TripAndHotelBox';

const OngoingTripPage = () => {
  return (
    <>
      <div className='w-[90%] gap-4 justify-around mx-auto   py-4 px-10 flex flex-wrap'>
        <TripAndHotelBox />
        <TripAndHotelBox />
        <TripAndHotelBox />
        <TripAndHotelBox />
      </div>
    </>
  )
}

export default OngoingTripPage