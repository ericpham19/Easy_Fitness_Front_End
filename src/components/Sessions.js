import React, { useState, useEffect} from 'react';
import UseAxios from  "../hooks/Axios";
import SessionsPage from '../Pages/SessionsPage';


export default function Sessions() {
  const {response} = UseAxios('/sessions')
  console.log(response)




  
//  useEffect(()=> {
//     fetch(SessionURL, {
//         headers: {
//           Authorization: `Bearer ${localStorage.token}`,
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       })
//         .then((res) => res.json())
//         .then((sessions) => setSessions(sessions));
//  },[])
    
  

  return (


    <div className="mt-8">
    <h1 className="text-4xl mb-2 text-center">Sessions</h1>
    {response && response.sessions.map(session=> <SessionsPage key={session.id} name={session.name} notes={session.notes}/>)}\
   
  </div>


    // <div>
    //     {sessions.map((session) => {
    //         return <div key= {session.id}>
    //                 <h2>{session.name}</h2>
    //                 <p>{session.notes}</p>
    //            
    //             </div>
                
    //         })}
      
      
    // </div>
  
  )
    
}