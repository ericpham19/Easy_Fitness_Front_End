import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRegisterUser } from '../reducers/userReducer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { apiRequest } from '../requests';



export default function SignUp() {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch()

  const createUser = async (user) => {
    const res = await apiRequest({path: '/sign_up', type: 'post', body: { user: user }})
    if(res.status == 200) {
      dispatch(setRegisterUser(res.data))
      nav('/login')
      toast.success(`Successfully signed up`)
    } else {
      toast.error(`Error!!! ${res.data.message}`)
    }
  }
  return (
    <div>
        <div>
          <br />
          <form onSubmit={(e)=> { e.preventDefault(); e.target.reset(); createUser({username, email, password}) } }>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
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
        </div>
      <br />
      <br />
    </div>
  );
}