import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { apiRequest } from "../hooks/Axios";
import { useNavigate } from "react-router-dom";
import { Dialog, Button, DialogContent, DialogTitle, DialogActions, DialogContentText, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { add_exercise } from "../reducers/SessionReducer";

const ExercisesModal = (props) => {
    const [exercises, setExercies] = React.useState([]);
    const [selectedExercise, setSelectedExercise] = React.useState(null);
    const dispatch = useDispatch()

    const fetchExercies = async () => {
        const res = await apiRequest({
            path: "/exercises",
            type: "get",
        });
        if (res.status == 200) {
            setExercies(res.data)
            toast.success(`Exercies data fetched!`);
        } else {
            toast.error(`Error!!! ${res.data.message}`);
        }
    };


    useEffect(() => {
        fetchExercies()
    }, [])

    return (
        <Dialog open={props.modalOpen} onClose={props.handleClose}>
            <DialogTitle>Add Exercise</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Select the exercise to add to your workout
                </DialogContentText>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={(e) => setSelectedExercise(e.target.value)}
                    >
                        {
                            exercises.map((e) =>
                                <FormControlLabel value={e.id} control={<Radio size="large" />} label={e.name} />
                            )
                        }
                    </RadioGroup>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={() => {
                    let exercise = exercises.find((e) => e.id == selectedExercise)
                    dispatch(add_exercise(exercise))
                    props.handleClose()
                }}>Select</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ExercisesModal;
