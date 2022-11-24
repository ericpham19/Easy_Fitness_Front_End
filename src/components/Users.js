import React from 'react'
import UseAxios from  "../hooks/Axios";
import UserPage from  "../Pages/UserPage"



const Users = () => {
  const {response} = UseAxios('/users')




  return (
  <div className="mt-8">
  <h1 className="text-4xl mb-2 text-center">User</h1>
  {response && response.users.map(user=> <UserPage key={user.id} username={user.username} email={user.email}/>)}\
 
</div>

)
  
  
}

export default Users
