import React from 'react'
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';


 const Sessions = () => {
  const userInfo = useSelector((state) => state.user.userInfo)
  console.log(userInfo)
  return (
    <div>
     
        {userInfo.sessions.map((session) => (
          <div key= {session.id}> 
       
          <h1>{session.name}</h1>
          <h1>{session.notes}</h1>
          
          </div>
          

        ))}

      
      <NavLink class="text-xl" to="/logout" style={{color: 'red'}}>Logout</NavLink>

    </div>
  )
   
}

export default Sessions;