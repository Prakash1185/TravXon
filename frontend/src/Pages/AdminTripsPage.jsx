import React, { useEffect, useState } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import TripDetailBox from '../Components/TripDetailBox'
import { handleError } from '../Components/ToastMessage';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const AdminTripsPage = () => {
    const [allTripsList, setAllTripsList] = useState([])
    const fetchAllTrips = async () => {
        try {
            const repsonse = await fetch(`${BACKEND_URL}/action/getAllTrips`, {
                method: "GET",
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            const result = await repsonse.json()
            const { allTrips, success } = result
            setAllTripsList(allTrips)
        } catch (error) {
            handleError("Something went wrong")
        }
    }

    useEffect(() => {
        fetchAllTrips()
    }, [])
    return (
        <>
            <AdminSidebar />
            <div className='lg:w-[80%] md:w-[70%]    w-[90%] mx-auto md:ml-[30%] lg:ml-[20%]'>

                <div className='w-[90%] mx-auto flex flex-col gap-2 py-3 '>
                {
                    allTripsList && allTripsList.length>0 ? (
                        allTripsList.map((item,index)=>{
                            return (
                                <TripDetailBox 
                                    key={index}
                                    title={item.title}
                                    about={item.about}
                                    endDate={item.endDate}
                                    startDate={item.startDate}
                                    _id={item._id}
                                    tripPrice={item.tripPrice}
                                    fetchAllTrips={fetchAllTrips}
                                />
                            );
                        })
                    ):(
                        <>
                            <h1>No Trips Found</h1>
                        </>
                    )
                }
                </div>

            </div>

        </>
    )
}

export default AdminTripsPage