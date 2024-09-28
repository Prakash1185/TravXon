import React from 'react'
import { YellowBgButton } from '../Components/Buttons'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1 className='text-3xl font-medium text-center pt-28'>ERROR 404 | Page Not Found</h1>
      <div className='text-center py-10'>
      <Link to={"/"}><YellowBgButton text='Go Back'/></Link>
      </div>
    </div>
  )
}

export default ErrorPage
