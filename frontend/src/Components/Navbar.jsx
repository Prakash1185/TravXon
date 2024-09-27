import React, { useEffect, useRef, useState } from 'react'
import { BorderButton, ProfileButton, YellowBgButton } from './Buttons'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {

  const [isBars, setIsBars] = useState(true);
  const navbarRef = useRef(null);
  const barRef = useRef(null);


  const toggleNavbar = () => {
    setIsBars((prevState) => !prevState)
  }

  const closeNavbar = () => {
    setIsBars(true)
  }

  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target) &&
        barRef.current &&
        !barRef.current.contains(e.target)
      ) {
        closeNavbar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    < >
      <nav className='z-50 sticky top-0  bg-bgColor w-full flex justify-between items-center py-3 md:py-3 md:px-10 px-5 border-b border-yColor '>
        <Link to={"/"} className=''>
          <h1 className='text-2xl'>Trav<span className='text-4xl font-bold'>X</span>on</h1>
        </Link>
        <div className=''>
          <i ref={barRef} id='bars' className="fa-solid fa-bars text-2xl md:hidden" onClick={toggleNavbar}></i>
        </div>
        <ul className={`${!isLoggedIn ? "pr-12" : "pr-60"} md:flex gap-6 hidden`}>

          {!isLoggedIn ? <><NavLink to={"/"} className={({ isActive }) => isActive ? "bg-yColor hover:cursor-pointer text-black font-medium w-20 text-center" : "    hover:bg-yColor hover:cursor-pointer hover:text-black font-medium w-20 text-center"}>Home</NavLink></> : <></>}

          <NavLink to={"/trips"} className={({ isActive }) => isActive ? "bg-yColor hover:cursor-pointer text-black font-medium w-20 text-center" : "    hover:bg-yColor hover:cursor-pointer hover:text-black font-medium w-20 text-center"}>Trips</NavLink>

          <NavLink to={"/hotels"} className={({ isActive }) => isActive ? "bg-yColor hover:cursor-pointer text-black font-medium w-20 text-center" : "    hover:bg-yColor hover:cursor-pointer hover:text-black font-medium w-20 text-center"}>Hotels</NavLink>

          <NavLink to={"/about"} className={({ isActive }) => isActive ? "bg-yColor hover:cursor-pointer text-black font-medium w-20 text-center" : "    hover:bg-yColor hover:cursor-pointer hover:text-black font-medium w-20 text-center"}>About</NavLink>


        </ul>
        <div className='hidden md:flex md:gap-3 '>
          {
            !isLoggedIn ? <><Link to={"/login"}> <YellowBgButton text='Login' /></Link>
              <Link to={"/register"}><BorderButton text='Register' /></Link></> : <><Link to={'/user/account'}><ProfileButton /></Link></>
          }


        </div>
      </nav>
      {/* MOBILE NAVBAR */}
      <div
        ref={navbarRef}
        className={`fixed top-[4.2rem] bottom-0 left-0 w-[60%] md:w-[50%]  z-10 bg-dark-black border-r border-gray-600 border-opacity-20 transform transition-transform ease-in-out duration-500 backdrop-blur-2xl bg-opacity-50 md:hidden ${isBars ? "-translate-x-full" : "translate-x-0"
          }`}
      >
        <ul className='flex gap-4 pt-10 pl-4 flex-col  text-xl justify-center'>
          {!isLoggedIn ? <><NavLink to={"/"} className={({ isActive }) => isActive ? "bg-yColor  text-black font-medium w-28 flex items-center pl-3 py-1.5" : "    font-medium w-28 flex items-center pl-3 py-1.5"}>Home</NavLink></> : <></>}

          <NavLink to={"/trips"} className={({ isActive }) => isActive ? "bg-yColor  text-black font-medium w-28 flex items-center pl-3 py-1.5" : "    font-medium w-28 flex items-center pl-3 py-1.5"}>Trips</NavLink>
          <NavLink to={"/hotels"} className={({ isActive }) => isActive ? "bg-yColor  text-black font-medium w-28 flex items-center pl-3 py-1.5" : "    font-medium w-28 flex items-center pl-3 py-1.5"}>Hotels</NavLink>
          <NavLink to={"/about"} className={({ isActive }) => isActive ? "bg-yColor  text-black font-medium w-28 flex items-center pl-3 py-1.5" : "    font-medium w-28 flex items-center pl-3 py-1.5"}>About</NavLink>

        </ul>
        <ul className='flex flex-col gap-3 pl-5 pt-20'>
          {
            !isLoggedIn ? <><Link to={"/login"}> <YellowBgButton text='Login' closeNavbar={closeNavbar} /></Link>
              <Link to={"/register"}><BorderButton text='Register' closeNavbar={closeNavbar} /></Link></> : <><Link to={'/user/account'}><ProfileButton /></Link></>
          }
        </ul>
      </div>
    </>
  )
}

export default Navbar