import { NavLink } from "react-router-dom"
import React from 'react'
import { useSelector } from "react-redux";

const FrontPage = () => {
  const userInfo = useSelector((state) => state.user.userInfo)
  return (
    <div class="flex flex-col justify-center items-center ">
      <div class="space-y-4">
        <img class="relative" alt="logo" src="https://t4.ftcdn.net/jpg/04/22/12/95/360_F_422129557_tBylYldzJ5KjVTEdRLMkQIaYizThV1PE.jpg" />
        <h1 class="text-4xl mb-5">Welcome to Easy Fitness</h1>
        
        {!userInfo && 
          <div>
            <span class="text-xl">Please proceed to sign in or sign up below</span>

            <div class="space-x-4">
              <NavLink class="text-xl " to="/login">Log In</NavLink>
              <span>|</span>
              <NavLink class="text-xl" to="/signup">Sign Up</NavLink>
            </div>
          </div>
        }
        <div class= "flex flex-col">{userInfo && <div class="space-x-4 space-y-4 ">
         <NavLink class="text-xl" to="/User">Username: {userInfo.username}</NavLink>
         <div> Please click the button below  to start a session</div>
         <br/>
         <NavLink class='text-xl' to='/session' style={{fontWeight: 'bold', border: '1px solid black'}}>Create a session</NavLink>
        <br/>
        <br/>
         <NavLink class="text-xl " to="/logout" style={{color: 'red'}}>Logout</NavLink>
        </div>}
</div>
        
      </div>




    </div>
  )
}
export default FrontPage;
