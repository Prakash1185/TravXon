import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./Components/Navbar"
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import OngoingTripPage from './Pages/OngoingTripPage';
import UpcomingTripPage from './Pages/UpcomingTripPage';
import TripAndHotelDetailsPage from "./Pages/TripAndHotelDetailsPage";
import AboutPage from "./Pages/AboutPage";
import ProfilePage from "./Pages/ProfilePage";
import UserProfilePage from './Pages/UserProfilePage';
import UserOngoingPage from './Pages/UserOngoingPage';
import UserUpcomingPage from './Pages/UserUpcomingPage';
import UserHistoryPage from './Pages/UserHistoryPage';
import AdminPage from './Pages/AdminPage';
import AddEventPage from './Pages/AddEventPage';
import EditEventPage from './Pages/EditEventPage';
import AdminUsersPage from "./Pages/AdminUsersPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import AdminTripsPage from "./Pages/AdminTripsPage";
import HotelDetailsPage from "./Pages/HotelDetailsPage";
import TermsAndConditonsPage from "./Pages/TermsAndConditonsPage";
import RefreshHandler from './Components/RefreshHandler';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const PrivateRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to={"/login"} />
  }

  return (
    <>
      <RefreshHandler setIsLoggedIn={setIsLoggedIn} />
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/trips" element={<PrivateRoute element={<OngoingTripPage />} />} />
        <Route path="/event/:id" element={<PrivateRoute element={<TripAndHotelDetailsPage />} />} />
        <Route path="/upcoming" element={<PrivateRoute element={<UpcomingTripPage />} />} />
        <Route path="/hotels" element={<PrivateRoute element={<HotelDetailsPage />} />} />
        <Route path="/hotel/:id" element={<PrivateRoute element={<TripAndHotelDetailsPage />} />} />
        <Route path="/about" element={<PrivateRoute element={<AboutPage />} />} />
        <Route path="/user" element={<PrivateRoute element={<ProfilePage />} />} />
        <Route path="/user/account" element={<PrivateRoute element={<UserProfilePage />} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/user/trips" element={<PrivateRoute element={<UserOngoingPage />} />} />
        <Route path="/user/hotels" element={<PrivateRoute element={<UserUpcomingPage />} />} />
        <Route path="/user/history" element={<PrivateRoute element={<UserHistoryPage />} />} />
        <Route path="/admin" element={<AdminPage />} />
<Route path="/admin/users" element={<AdminUsersPage />} />
<Route path="/admin/trips" element={<AdminTripsPage />} />
<Route path="/add/event" element={<AddEventPage />} />
<Route path="/termsandconditons" element={<TermsAndConditonsPage />} />
<Route path="/edit/event/:id" element={<EditEventPage />} />

      </Routes>

      <ToastContainer />

    </>
  )
}

export default App
