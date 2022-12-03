import React from 'react'
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import Users from '../components/Users'
import WeightChart from '../components/WeightChart';
const UserPage = () => {

  return (
    <div>
      <WeightChart />
      <Users/>
    </div>
  )
}

export default UserPage;
