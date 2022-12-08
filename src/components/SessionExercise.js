
import React, { useEffect } from "react"
import { Accordion, AccordionSummary, Typography, AccordionDetails, Grid, Item, Box, Button } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SessionSet from "./SessionSet";
import { useDispatch, useSelector } from "react-redux";
import { add_set } from "../reducers/SessionReducer";

const SessionExercise = (props) => {
    const dispatch = useDispatch()
    const all_sets = useSelector((state) => state.session.sets);
    const sets = all_sets.filter(s => s.exercise_id == props.exercise.id)
      

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{props.exercise.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box >
                    <Grid container spacing={2} sx={{mb: 3}}>
                        <Grid item xs={2}>
                            SET
                        </Grid>
                        <Grid item xs={4}>
                            WEIGHT <b>kg</b>
                        </Grid>
                        <Grid item xs={4}>
                            REPETITIONS
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                    {sets.map((s) => <SessionSet set={s} />)}
                    <Typography align="center">
                        <Button color="primary" onClick={() => dispatch(add_set({ number: sets.length + 1, exercise_id: props.exercise.id, weight: null, reps: null, completed: false }))}>Add Set</Button>
                    </Typography>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default SessionExercise;