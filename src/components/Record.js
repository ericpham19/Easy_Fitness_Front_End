import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Grid, ListItemIcon, Accordion, AccordionSummary, Typography, AccordionDetails} from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sessions from './Sessions';

function Record({ session, deleteRecord}) {
  let bestWeight = Math.max(...(session.session_exercises).map((e) => Math.max(...e.exercise_sets.map((s)=> s.weight))))
   console.log(session)
  
  return (
    <Grid item xs={6}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div class="text-end">
            <Button color='warning' onClick={()=> deleteRecord(session.id) }>Delete</Button>
          </div>
          <Typography variant="h5" component="div">
            {session.notes || "Notes Not Available"}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Time: </b>{(new Date(Date.parse(session.created_at))).toDateString()}
          </Typography>
          <Grid container>
            <Grid item xs={6} sx={{ mb: 1.5 }} color="text.secondary">
              <ListItemIcon style={{ textAlign: "center" }}>
                <div>
                  <AccessTimeFilledIcon color="primary" fontSize="medium" sx={{ mr: 1 }} />
                  {session.duration}
                </div>
              </ListItemIcon>
            </Grid>
            <Grid item xs={6} sx={{ mb: 1.5 }} color="text.secondary">
              <ListItemIcon style={{ textAlign: "center" }}>
                <div>
                  <FitnessCenterIcon color="primary" fontSize="medium" sx={{ mr: 1 }} />
                 <b>Total Weight</b>  {session.session_exercises.reduce((sum, e) => sum + e.exercise_sets.reduce((sum, set) => sum + set.weight, 0), 0)}
                </div>
              </ListItemIcon>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={6} sx={{ mb: 1.5 }} color="text.secondary">
              <b>Best weight: </b>
            </Grid>
            <Grid item xs={6} sx={{ mb: 1.5 }} color="text.secondary">
              <ListItemIcon style={{ textAlign: "center" }}>
                <div>
                  <FitnessCenterIcon color="primary" fontSize="medium" sx={{ mr: 1 }} />
                  { bestWeight == -Infinity ? 0 : bestWeight }
                </div>
              </ListItemIcon>
            </Grid>
          </Grid>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Exercises</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {session.session_exercises.map(e => <Box><b>{e.name}</b> x {e.exercise_sets.length} {e.exercise_sets.map((s) => <Box>{s.weight}kg x {s.reps}reps  </Box>) }</Box>)}
          
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Grid>
  )


}

export default Record
