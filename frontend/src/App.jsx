import { Routes, Route } from "react-router-dom"
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


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ongoing" element={<OngoingTripPage />} />
        <Route path="/event/:id" element={<OngoingTripPage />} />
        <Route path="/upcoming" element={<UpcomingTripPage />} />

        <Route path="/hotel" element={<LandingPage />} />
        <Route path="/hotel/:id" element={<TripAndHotelDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/user/account" element={<UserProfilePage />} />
        <Route path="/user/ongoing" element={<UserOngoingPage />} />
        <Route path="/user/upcoming" element={<UserUpcomingPage />} />
        <Route path="/user/history" element={<UserHistoryPage />} />

        <Route path="/admin" element={<AdminPage />} />

        <Route path="/admin/users" element={<AdminUsersPage />} />

        <Route path="/add/event" element={<AddEventPage />} />

        <Route path="/edit/event/:id" element={<EditEventPage />} />
      </Routes>
    </>
  )
}

export default App
