import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { handleError } from '../Components/ToastMessage';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { YellowBgButton } from './../Components/Buttons';

const TripAndHotelDetailsPage = () => {
  const { id } = useParams(); // Get trip ID from URL
  const [tripDetails, setTripDetails] = useState(null); // State to store trip details

  // Function to fetch a single trip based on the ID
  const fetchSingleTrip = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/action/getTripById/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      const result = await response.json();

      if (result.success) {
        setTripDetails(result.singleTrip); // Set trip data to state
      } else {
        handleError(result.message); // Handle error message if trip not found
      }
    } catch (error) {
      handleError('Something went wrong while fetching the trip details.');
    }
  };

  // Fetch trip details when component mounts
  useEffect(() => {
    fetchSingleTrip();
  }, [id]);

  return (
    <>
      <div className="trip-details-page w-[90%]  mx-auto py-4">
        {tripDetails ? (
          <div className="trip-details">
            <img src={tripDetails.image} alt={tripDetails.title} className="w-[30rem]  mx-auto h-auto mb-4" />
            <h1 className="text-4xl text-center font-bold mb-4">{tripDetails.title}</h1>
            <p className="text-lg mb-4 text-center">{tripDetails.about}</p>
            <p className="text-3xl mb-2 text-center"><strong>Start Date:</strong> {new Date(tripDetails.startDate).toLocaleDateString()}</p>
            <p className="text-3xl mb-2 text-center"><strong>End Date:</strong> {new Date(tripDetails.endDate).toLocaleDateString()}</p>
            <p className="text-md mb-2 text-2xl text-center"><strong>Price:</strong> ₹ {tripDetails.tripPrice}</p>
            <p className="text-md text-center">{tripDetails.description}</p>
            <div className='text-center pt-4'><YellowBgButton text='Book Now'/></div>
          </div>
        ) : (
          <p>Loading trip details...</p>
        )}
      </div>
    </>
  );
};

export default TripAndHotelDetailsPage;
