import React, { useEffect, useState } from 'react';
import TripAndHotelBox from './../Components/TripAndHotelBox';
import { handleError } from './../Components/ToastMessage';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const tripsTripPage = () => {
  const [allTripList, setAllTripsList] = useState([]);

  const formatDate = (dateString) => {
    // Convert the date from ISO format to 'YYYY-MM-DD'
    return new Date(dateString).toISOString().split('T')[0];
  };

  const fetchAllTrips = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/action/getAllTrips`, {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      const result = await response.json();
      const { allTrips, success } = result;

      // Format the startDate and endDate of each trip
      const formattedTrips = allTrips.map((trip) => ({
        ...trip,
        startDate: formatDate(trip.startDate),
        endDate: formatDate(trip.endDate),
      }));

      setAllTripsList(formattedTrips);
    } catch (error) {
      handleError('Something went wrong');
    }
  };

  useEffect(() => {
    fetchAllTrips();
  }, []);

  return (
    <>
      <div className="w-[90%] gap-4 justify-around mx-auto py-4 px-10 flex flex-wrap">
        {allTripList && allTripList.length > 0 ? (
          allTripList.map((item, index) => (
            <TripAndHotelBox
              key={index}
              imageLink={item.image}
              about={item.about}
              endDate={item.endDate}
              startDate={item.startDate}
              title={item.title}
              id={item._id}
            />
          ))
        ) : (
          <h1>No Trips Found</h1>
        )}
      </div>
    </>
  );
};

export default tripsTripPage;
