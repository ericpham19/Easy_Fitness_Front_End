import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { apiRequest } from '../requests';
import { login } from '../reducers/userReducer';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


export default function Login() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (user) => {
    const res = await apiRequest({ path: '/login', type: 'post', body: { user: user } })
    if (res.status == 201) {
      dispatch(login(res.data))
      nav('/User')
      toast.success(`Successfully logged in`)
    } else {
      toast.error(`Error!!! ${res.data.message}`)
    }
  }

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin({username, password }); e.target.reset(); } }>
        <br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        Don't have an account?
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
      <br />
      <br />
    </div>
  )
}