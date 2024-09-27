import React from 'react'

const UserDetailsBox = ({ username = "Username", joined = "joined date", email = "email" }) => {
    return (
        <>
            <div className=' border border-yColor  bg-bgColor  px-3 py-2'>
                <h1>Username : {username}</h1>
                <p>Email: {email}</p>
                <p>Joined: {joined}</p>
            </div>
        </>
    )
}

export default UserDetailsBox
