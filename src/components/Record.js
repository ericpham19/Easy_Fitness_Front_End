import React from 'react'
import { useSelector } from "react-redux";
function Record() {
    const userInfo = useSelector((state) => state.user.userInfo)
    console.log(userInfo)

  return (
    <div>
     
        {userInfo.sessions[0].exercises.map((exercise) => (
          <div key= {exercise.id}> 
          <h1>{exercise.name}</h1>
          <h1>{exercise.set}</h1>
          <h1>{exercise.weight_kg}</h1>
          <h1>{exercise.reps}</h1>
          
          </div>
          

        ))}

      
      

    </div>
  )
   
  
}

export default Record
