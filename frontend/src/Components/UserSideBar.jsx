import React from 'react'
import { NavLink } from 'react-router-dom';

const UserSideBar = () => {
  const links = [
    {
      title: "Account",
      link: "/user/account",
    },
    {
      title: "Trips",
      link: "/user/trips",
    },
    {
      title: "Hotels",
      link: "/user/hotels",
    },
    {
      title: "History",
      link: "/user/history",
    },

  ];
  return (
    <>
      <div className="border-r  bg-bgColor w-[30%] lg:w-[20%] h-[89vh] fixed border-yColor hidden md:block">
        <ul className="flex  flex-col items-center justify-center mx-auto space-y-4 pt-7">
          {links.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              end
              className={({ isActive }) =>
                isActive
                  ? "block w-52 py-0.5 px-4 transition duration-200  bg-yColor  font-medium text-black rounded-lg "
                  : "block  w-52 py-0.5 px-4 transition duration-200 hover:bg-gray-500 hover:bg-opacity-25 hover:text-white rounded-lg"
              }
            >
              <li className="py-2 ">{item.title}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  )
}

export default UserSideBar