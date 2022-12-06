import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { apiRequest } from "../hooks/Axios";
import { useNavigate } from "react-router-dom";
import { TextField, Grid } from "@mui/material";
import { Container } from '@mui/system';
import { Dialog, Button, DialogContent, DialogTitle, DialogActions, DialogContentText } from "@mui/material";
import ExercisesModal from "./ExercisesModal";
import SessionExercise from "./SessionExercise";
import Timer from "./Timer";
import { set_notes, cancelSession } from "../reducers/SessionReducer";

const Sessions = () => {
  const nav = useNavigate();
  const selectedExercies = useSelector((state) => state.session.exercises);
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createSession = async () => {
    const res = await apiRequest({
      path: "/sessions",
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
      <Grid container spacing={2} sx={{ mb: 3, py: 3 }}>
        <Grid item xs={6}>
          <Timer />
        </Grid>
        <Grid item xs={6} className="text-end">
          <Button variant="contained" color="warning" onClick={createSession}>
            Finish
          </Button>
        </Grid>
      </Grid>

      <div>
        <TextField fullWidth label="Workout Notes" id="fullWidth" name="note" onChange={(e) => dispatch(set_notes(e.target.value))} sx={{ my: 3 }} />
        <br />
        <Button variant="outlined" onClick={handleClickOpen} sx={{ my: 3 }}>
          Add an Exercise
        </Button>
      </div>
      <div>
        {
          selectedExercies.map((e) => <SessionExercise exercise={e} />)
        }
      </div>
      <div className="mt-4">
        <NavLink class="text-xl" style={{ color: "red" }} to="/" onClick={()=>{ dispatch(cancelSession());  toast.success(`Session cancelled successfully`); }}>
          Cancel Workout
        </NavLink>
      </div>
      <div className="mt-4">

        <NavLink class="text-xl" to="/logout" style={{ color: "red" }}>
          Logout
        </NavLink>
      </div>
      <ExercisesModal modalOpen={open} handleClose={handleClose} />
    </Container>
  );
};

export default Sessions;
