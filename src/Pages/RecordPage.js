import React, { useEffect, useState } from 'react'
import Record from "../components/Record";
import { useDispatch } from 'react-redux';
import { apiRequest } from '../hooks/Axios';
import { toast } from 'react-toastify';
import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const RecordPage = () => {
  const dispatch = useDispatch()
  const [sessions, setSessions] = useState([])

  const fetchSessions = async () => {
    const res = await apiRequest({
      path: "/sessions",
      type: "get",
    });
    if (res.status == 200) {
      setSessions(res.data)
      toast.success(`Session data fetched successfully`);
    } else {
      toast.error(`Error!!! ${res.data.message}`);
    }
  };

  useEffect(() => {
    fetchSessions()
  }, []);

  const deleteRecord = async (id) => {
    const res = await apiRequest({
      path: `/sessions/${id}`,
      type: "delete",
    });
    if (res.status == 200) {
      setSessions(sessions.filter((s) => s.id != id))
      toast.success(`Session deleted successfully`);
    } else {
      toast.error(`Error!!! ${res.data.message}`);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" component="div" sx={{mb: 2}} align="left">
          Workout History
        </Typography>
      <Grid display= "grid" container spacing={3}  >
      
        {
          sessions.length > 0 ? (sessions.map((s) => <Record key={s.id} session={s} deleteRecord = {deleteRecord} />)) : <Box justifyContent= "center" alignItems="center" sx={{ m: 2 }}>No Session Found</Box>
        }
    
        
      </Grid>
    </Container>
  ) 
}

export default RecordPage
