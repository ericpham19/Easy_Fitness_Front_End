import React from 'react'
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

const UserPage = () => {
  const userInfo = useSelector((state) => state.user.userInfo)
  return (
    <div>

      <h1 className='my-5'>{userInfo.username}</h1>
      <p className='my-5'>{userInfo.email}</p>
      <h1 className='my-5 py-5'>Hello...</h1>
      <NavLink class="text-xl" to="/logout" style={{color: 'red'}}>Logout</NavLink>

    </div>
  )
}

export default UserPage;
