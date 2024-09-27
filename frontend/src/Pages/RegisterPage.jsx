import React, { useState } from 'react'
import { SubmitButton } from '../Components/Buttons'
import { Link, useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from './../Components/ToastMessage';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const RegisterPage = () => {

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyUserInfo = { ...userInfo }
    copyUserInfo[name] = value
    setUserInfo(copyUserInfo)
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    const { name, email, password } = userInfo
    if (!name || !email || !password) {
      return handleError("Please fill all the details")
    }

    try {
      const response = await fetch(`${BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo)
      })
      const result = await response.json()
      const { success, message, error } = result
      if (success) {
        handleSuccess(message)
        navigate("/login")
        setUserInfo({
          name: "",
          email: "",
          password: ""
        })
      } else if (error) {
        const details = error?.details[0].message
        handleError(details)
      } else if (!success) {
        handleError(message)
      }
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <div className="flex  h-[85vh] items-center">
      <div className="bg-bgColor border border-yColor  py-8 px-8  w-[22rem] md:w[24rem]  mx-auto  rounded-xl h-[70vh] flex flex-col items-center ">
        <h1 className="text-white text-center text-3xl tracking-wide  py-1 mb-3 font-bold">
          Register
        </h1>
        <form
          className="flex flex-col items-center text-black gap-1"
          onSubmit={handleRegisterSubmit}
        >
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Name"
            className="my-1 outline-none  py-2 px-3 rounded-md w-72"
            name="name"
            onChange={handleChange}
            value={userInfo.name}

          />
          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Email"
            className="my-1 outline-none  py-2 px-3 rounded-md w-72"
            name="email"
            onChange={handleChange}
            value={userInfo.email}
          />
          <input
            type="password"
            required
            autoComplete="off"
            placeholder="Password"
            className="my-1 outline-none  py-2 px-3 rounded-md w-72"
            name="password"
            onChange={handleChange}
            value={userInfo.password}
          />
          <button type="submit" className="mt-2">
            <SubmitButton text={"Register"} />
          </button>
        </form>
        <p className="text-white mt-4">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-yColor font-medium hover:underline"
          >
            Login
          </Link>
        </p>
        <p className='text-xs text-center mt-3 tracking-tight text-gray-500'>By registering yourself you're agreeing to our <span className='hover:text-yColor hover:cursor-pointer'><Link to={"/termsandconditons"}>terms & conditions</Link></span></p>
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

export default RegisterPage