'use client'

// import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import SummaryCard from '../components/summery_card'; // Import SummaryCard component
import RecentProjects from '../components/RecentProjects'; // Import RecentProjects component

// Dummy data for charts
const projectStatusData = [
  { name: 'Completed', value: 45 },
  { name: 'In Progress', value: 30 },
  { name: 'Planned', value: 25 },
];

const monthlyProjectsData = [
  { name: 'Jan', projects: 4 },
  { name: 'Feb', projects: 3 },
  { name: 'Mar', projects: 5 },
  { name: 'Apr', projects: 7 },
  { name: 'May', projects: 2 },
  { name: 'Jun', projects: 6 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

// Dummy data for recent projects
const recentProjects = [
  { title: 'Project A', duration: '6 months', status: 'In Progress' },
  { title: 'Project B', duration: '3 months', status: 'Completed' },
  { title: 'Project C', duration: '1 year', status: 'In Progress' },
  { title: 'Project D', duration: '9 months', status: 'Planned' },
];

export default function Dashboard() {
  // Dummy data for statistics
  const stats = {
    completedProjects: 45,
    runningProjects: 12,
    totalBoards: 78,
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Statistics Cards */}
          <Grid item xs={12} sm={4}>
            <SummaryCard title="Completed Projects" count={stats.completedProjects} description='Total number of projects that have been completed successfully.'/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SummaryCard title="Running Projects" count={stats.runningProjects} description='Projects that are currently ongoing.'/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SummaryCard title="Total Boards" count={stats.totalBoards} description='Total number of boards across all projects.'/>
          </Grid>

          {/* Bar Chart */}
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 300,
              }}
            >
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Monthly Projects
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyProjectsData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="projects" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Pie Chart */}
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 300,
              }}
            >
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Project Status
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {projectStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Recent Projects List */}
          <Grid item xs={12}>
            <RecentProjects projects={recentProjects} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
