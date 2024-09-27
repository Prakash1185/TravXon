export const YellowBgButton = ({ text = "text" , closeNavbar }) => {
  return (
    <button  onClick={closeNavbar} className="bg-yColor text-black font-semibold py-2 px-5 rounded-md text-lg transition-all duration-150 border border-yColor hover:bg-opacity-90">
      {text}
    </button>
  )
}

export const ProfileButton = () => {
  return (
    <button className="border border-yColor font-medium py-2 px-3   duration-150 rounded-full">
      <i class="fa-solid fa-user"></i>
    </button>
  )
}

export const BorderButton = ({ text = "text" ,closeNavbar}) => {
  return (
    <button onClick={closeNavbar} className="border border-yColor font-medium py-2 px-5 rounded-md text-lg hover:bg-gray-50 hover:bg-opacity-10 transition-all duration-150">
      {text}
    </button>
  )
}

export const SubmitButton = ({ text }) => {
  return (
    <h1 className="bg-yColor py-3 rounded-lg  font-semibold border border-yColor transition w-72  duration-200 text-black">
      {text}
    </h1>
  );
};

export const AddEventButton = ({ text }) => {
  return (
    <button type="submit" className="bg-yColor py-3 text-center rounded-lg  font-semibold border border-yColor transition w-72  duration-200 text-black">
      {text}
    </button>
  );
};

export const EditEventButton = ({ text }) => {
  return (
    <button type="submit" className="bg-yColor py-3 text-center rounded-lg  font-semibold border border-yColor transition w-72  duration-200 text-black">
      {text}
    </button>
  );
};

export const ViewButton = ({ text }) => {
  return (
    <h1 className="bg-yColor py-1 rounded-lg  font-semibold border border-yColor transition w-64 md:w-72  duration-200 cursor-pointer text-[1.2rem] text-black group flex justify-center items-center gap-1">
      {text}
      <i className="group-hover:pl-1.5 transition-all duration-200 fa-arrow-right fa-solid text-lg  font-bold"></i>
    </h1>
  );
};

export const LogoutButton = ({ handleLogout }) => {
  return (
    <button
      type="submit"
      onClick={handleLogout}
      className="bg-red-800  px-4 py-2  hover:bg-opacity-80 rounded-sm font-medium border border-red-800 transition  duration-200"
    >
      Logout
    </button>
  );
};




