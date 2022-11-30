import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { apiRequest } from "../hooks/Axios";
import { useNavigate } from "react-router-dom";
import { TextField, Grid } from "@mui/material";
import { Container } from '@mui/system';
import { Dialog, Button, DialogContent, DialogTitle, DialogActions, DialogContentText } from "@mui/material";
import ExercisesModal from "./ExercisesModal";

const Sessions = () => {
  const nav = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfo);
  const [selectedExercies, setSelectedExercies] = useState([]);
  console.log(selectedExercies)
  const [name, setName] = useState("");
  const [set, setSet] = useState("");
  const [weight_kg, setWeight_kg] = useState("");
  const [reps, setReps] = useState("");
  // const [session_id, setSession_id] = useState(userInfo.sessions[0].id);
  const [user_id, setUser_id] = useState(userInfo.id);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectExercise = (e) => {
    setSelectedExercies([...selectedExercies, e])
  }

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
    <Container fluid>
      <div>

        <TextField fullWidth label="Workout Name" id="fullWidth" name="note" onChange={(e) => setName(e.target.value)} sx={{ my: 3 }} />
        <br />
        <Button variant="outlined" onClick={handleClickOpen} sx={{ my: 3 }}>
          Add an Exercise
        </Button>
      </div>
      <div>
        {
          selectedExercies.map((e) => e.name ) 
        }
      </div>
      <div className="mt-5">
        <NavLink class="text-xl" to="/logout" style={{ color: "red" }}>
          Logout
        </NavLink>
      </div>
      <ExercisesModal modalOpen={open} handleClose={handleClose} selectExercise={selectExercise} />
    </Container>
  );
};

export default Sessions;
