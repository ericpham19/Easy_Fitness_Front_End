import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { apiRequest } from "../hooks/Axios";
import { useNavigate } from "react-router-dom";

const Sessions = () => {
  const nav = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log(userInfo)
  const [name, setName] = useState("");
  const [set, setSet] = useState("");
  const [weight_kg, setWeight_kg] = useState("");
  const [reps, setReps] = useState("");
  const [session_id, setSession_id] = useState(userInfo.sessions[0].id);
  const [user_id, setUser_id] = useState(userInfo.id);

  const createSession = async (session) => {
    const res = await apiRequest({
      path: "/exercises",
      type: "post",
      body: { session: session },
    });
    if (res.status == 201) {
      
      nav("/records");
      toast.success(`Successfully created a session`);
    } else {
      toast.error(`Error!!! ${res.data.message}`);
      
    }
  };

  return (
    <div>
      
      <div>
     
          <form onSubmit={(e)=> { e.preventDefault(); e.target.reset(); createSession({name, set, weight_kg, reps}) } }>
            <input
              type="text"
              name="name"
              placeholder="Exercise Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="set"
              placeholder="Set"
              onChange={(e) => setSet(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="weight_kg"
              placeholder="Weight_kg"
              onChange={(e) => setWeight_kg(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="reps"
              placeholder="Reps"
              onChange={(e) => setReps(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="session_id"
              placeholder="session_id"
              onChange={(e) =>setSession_id(userInfo.sessions[0].id)}
              
            />
            <br />
            <input
              type="text"
              name="user_id"
              placeholder="User_id"
              onChange={(e) =>setUser_id(userInfo.id)}
              
            />
            <button type="submit">Submit</button>
          </form>
        
      </div>


      <div>
        <NavLink class="text-xl" to="/logout" style={{ color: "red" }}>
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sessions;
