import React from 'react'
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import Sessions from '../components/Sessions'

const SessionsPage = () => {
 
  return (
    <div>
      <Sessions></Sessions>
    </div>
  )
}


export default SessionsPage
