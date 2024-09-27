import React, { useState } from 'react'
import { BorderButton, ProfileButton, YellowBgButton } from './Buttons'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const [isBars, setIsBars] = useState(true)

  const links = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "All Transactions",
      link: "/all-transactions",
    },
    {
      title: "College Spend",
      link: "/college",
    },
    {
      title: "New Spend",
      link: "/new",
    },
    {
      title: "Future Spend",
      link: "/future",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];

  const toggleNavbar = () => {
    setIsBars((prevState) => !prevState)
  }

  return (
    < >
      <nav className='z-50 sticky top-0  bg-bgColor w-full flex justify-between items-center py-3 md:py-3 md:px-10 px-5 border-b border-yColor '>
        <Link to={"/"} className=''>
          <h1 className='text-2xl'>Trav<span className='text-4xl font-bold'>X</span>on</h1>
        </Link>
        <div className=''>
          <i id='bars' className="fa-solid fa-bars text-2xl md:hidden" onClick={toggleNavbar}></i>
        </div>
        <ul className='md:flex gap-6 hidden pr-44'>
          <NavLink to={"/"} className={({ isActive }) => isActive ? "bg-yColor hover:cursor-pointer text-black font-medium w-20 text-center" : "    hover:bg-yColor hover:cursor-pointer hover:text-black font-medium w-20 text-center"}>Home</NavLink>

          <NavLink to={"/ongoing"} className={({ isActive }) => isActive ? "bg-yColor hover:cursor-pointer text-black font-medium w-20 text-center" : "    hover:bg-yColor hover:cursor-pointer hover:text-black font-medium w-20 text-center"}>Ongoing</NavLink>

          <NavLink to={"/upcoming"} className={({ isActive }) => isActive ? "bg-yColor hover:cursor-pointer text-black font-medium w-20 text-center" : "    hover:bg-yColor hover:cursor-pointer hover:text-black font-medium w-20 text-center"}>Upcoming</NavLink>

          <NavLink to={"/about"} className={({ isActive }) => isActive ? "bg-yColor hover:cursor-pointer text-black font-medium w-20 text-center" : "    hover:bg-yColor hover:cursor-pointer hover:text-black font-medium w-20 text-center"}>About</NavLink>


        </ul>
        <div className='hidden md:flex md:gap-3 '>
         {/* <Link to={"/login"}> <YellowBgButton text='Login' /></Link>
          <Link to={"/register"}><BorderButton text='Register' /></Link> */}
          <Link to={'/user/account'}><ProfileButton/></Link>
        </div>
      </nav>
      {/* MOBILE NAVBAR */}
      <div
        className={`fixed top-[4.2rem] bottom-0 left-0 w-[60%] md:w-[50%]  z-10 bg-dark-black border-r border-gray-600 border-opacity-20 transform transition-transform ease-in-out duration-500 backdrop-blur-2xl bg-opacity-50 md:hidden ${isBars ? "-translate-x-full" : "translate-x-0"
          }`}
      >
        <ul className='flex gap-4 pt-10 pl-4 flex-col  text-xl justify-center'>
          <NavLink to={"/"} className={({ isActive }) => isActive ? "bg-yColor  text-black font-medium w-28 flex items-center pl-3 py-1.5" : "    font-medium w-28 flex items-center pl-3 py-1.5"}>Home</NavLink>
          <NavLink to={"/ongoing"} className={({ isActive }) => isActive ? "bg-yColor  text-black font-medium w-28 flex items-center pl-3 py-1.5" : "    font-medium w-28 flex items-center pl-3 py-1.5"}>Ongiong</NavLink>
          <NavLink to={"/upcoming"} className={({ isActive }) => isActive ? "bg-yColor  text-black font-medium w-28 flex items-center pl-3 py-1.5" : "    font-medium w-28 flex items-center pl-3 py-1.5"}>Upcoming</NavLink>
          <NavLink to={"/about"} className={({ isActive }) => isActive ? "bg-yColor  text-black font-medium w-28 flex items-center pl-3 py-1.5" : "    font-medium w-28 flex items-center pl-3 py-1.5"}>About</NavLink>

        </ul>
      </div>
    </>
  )
}

export default Navbar