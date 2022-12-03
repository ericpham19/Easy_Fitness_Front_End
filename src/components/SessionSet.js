import React, { useState } from "react"
import { Grid, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { update_set } from "../reducers/SessionReducer";


const SessionSet = (props) => {
    const [set, setSet] = useState({id: props.set.id, completed: false})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setSet({
            ...set,
            [e.target.id]: parseInt(e.target.value)
        })
        dispatch(update_set(set))
    }

    const toggleComplete = (completed) => {
        let newSet = {...set, completed: completed}
        setSet(newSet);
        dispatch(update_set(newSet))
    }


    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                {props.set.number}
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="weight"
                    min="0"
                    type="number"
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: { 
                            max: 999, min: 0 
                        }
                    }}
                    size="small"
                    value={set.weight}
                />

            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="reps"
                    min="0"
                    type="number"
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: { 
                            max: 999, min: 0 
                        }
                    }}
                    size="small"
                    value={set.reps}
                />
            </Grid>
            <Grid item xs={2}>
                <Button variant={set.completed ? 'contained' : 'outlined'} color="success" onClick={()=>toggleComplete(!set.completed)}>{set.completed ? 'Completed' : 'Mark complete'}</Button>
            </Grid>
        </Grid>
    )
}

export default SessionSet;