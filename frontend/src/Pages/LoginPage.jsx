import React, { useState } from 'react'
import { SubmitButton } from '../Components/Buttons'
import { Link, useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from './../Components/ToastMessage';


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const LoginPage = ({setIsLoggedIn, isLoggedIn}) => {

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    const copyLoginInfo = { ...loginInfo }
    copyLoginInfo[name] = value
    setLoginInfo(copyLoginInfo)
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
  
    // Check if the fields are filled
    if (!email || !password) {
      return handleError("Please fill all the details");
    }
  
    try {
      const response = await fetch(`${BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
  
      const result = await response.json(); // Get the result body
      const { success, message, jwtToken, id } = result;
  
      if (response.ok && success) {
        // Handle successful login
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("userid", id);
  
        // Update the logged-in state
        setIsLoggedIn(true);
  
        // Navigate to the user account page
        // navigate("/user/account");
        navigate("/trips");
  
        // Reset the form
        setLoginInfo({ email: "", password: "" });
      } else {
        // Handle login failure (e.g., invalid credentials)
        handleError(message);
      }
    } catch (error) {
      // Handle unexpected errors (e.g., network issues)
      console.error("Login Error:", error);
      handleError("Something went wrong. Please try again later.");
    }
  };
  
  

  return (
    <div className="flex  h-[85vh] items-center">
      <div className="bg-bgColor border border-yColor  py-8 px-8  w-[22rem] md:w[24rem]  mx-auto  rounded-xl h-[60vh] flex flex-col items-center ">
        <h1 className="text-white text-center text-3xl tracking-wide  py-1 mb-3 font-bold">
          Log in
        </h1>
        <form
          className="flex flex-col items-center text-black gap-1"
          onSubmit={handleLoginSubmit}
        >
          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Email"
            className="my-1 outline-none  py-2 px-3 rounded-md w-72"
            name="email"
            onChange={handleChange}
            value={loginInfo.email}
          />
          <input
            type="password"
            required
            autoComplete="off"
            placeholder="Password"
            className="my-1 outline-none  py-2 px-3 rounded-md w-72"
            name="password"
            onChange={handleChange}
            value={loginInfo.password}
          />
          <button type="submit" className="mt-2">
            <SubmitButton text={"Login"} />
          </button>
        </form>
        <p className="text-white mt-8">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-yColor font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
        {/* <p className="text-white mt-3">
          Forgot password?{" "}
          <Link
            to={"forgot-password"}
            className="text-yColor font-medium hover:underline"
          >
            click here
          </Link>
        </p> */}
      </div>
    </div>
  )
}

export default LoginPage