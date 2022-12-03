import React, { useEffect, useState } from 'react'
import { apiRequest } from '../hooks/Axios';
import { toast } from 'react-toastify';
import { Container, Box } from '@mui/system';
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar }            from 'react-chartjs-2'

const WeightChart = () => {
    const [sessions, setSessions] = useState({})

    const fetchSessions = async () => {
        const res = await apiRequest({
            path: "/sessions/weekly_stats",
            type: "get",
        });
        if (res.status == 200) {
            setSessions(res.data)
            toast.success(`Graph data fetched successfully`);
        } else {
            toast.error(`Error!!! ${res.data.message}`);
        }
    };

    useEffect(() => {
        fetchSessions()
    }, []);

    const chartData = () => {
        return {
            labels: sessions.labels,
            datasets: [
                {
                    label: 'Weights',
                    data: sessions.data
                }
            ]
        }
    }

    return (
        <Container fluid sx={{ py: 5 }}>
            <Box className="chart-container w-50" sx={{width: '80%', mx: 'auto'}}>
                <h2 style={{ textAlign: "center" }}>Weights Analytics</h2>
                <Bar
                    data={chartData()}
                    options={{
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: "Workouts per Week"
                            },
                            legend: {
                                display: false
                            }
                        }
                    }}
                />
            </Box>
        </Container>
    )
}

export default WeightChart;
