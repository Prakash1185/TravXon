import React from 'react'
import { Link } from 'react-router-dom'

const UserDetailsBox = ({ username = "Username", joined = "joined date", email = "email", isAdmin }) => {
    return (
        <>
            <div className=' border border-yColor  bg-bgColor  px-3 py-2'>
                <h1>Username : {username}</h1>
                <p>Email : {email}</p>
                <p>Joined : {joined}</p>
                {/* <p>isAdmin : {isAdmin}</p> */}
                <div className='flex gap-2 py-1 pt-2'>
                    <button onClick={() => deleteFunc(_id)} className='py-1 px-3 bg-red-950 bg-opacity-80 text-red-200'>Delete</button>
                </div>
            </div>
        </>
    )
}

export default UserDetailsBox
