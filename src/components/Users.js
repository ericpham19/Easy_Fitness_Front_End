import React from 'react'
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';


const Users = () => {
  const userInfo = useSelector((state) => state.user.userInfo)
  console.log(userInfo)
  return (
    <div>

      <h1 class='my-5'>{userInfo.username}</h1>
      <p class='my-5'>{userInfo.email}</p>
     
       
          

    

      
      <NavLink class="text-xl" to="/logout" style={{color: 'red'}}>Logout</NavLink>

    </div>
  )
  
}

export default Users
