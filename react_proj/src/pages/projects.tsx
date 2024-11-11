import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Chip,
  LinearProgress,
  TextField,
  MenuItem,
  AppBar,
  Toolbar,
  Container,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
// import { PieChart, Pie, Cell } from 'recharts';
import CountUp from 'react-countup';

// Assuming Header component is imported from somewhere
// import Header from "../components/log_header";

const dummyProjects = [
  {
    projectName: "Project Apollo",
    members: 8,
    duration: "6 months",
    endDate: "Dec 31, 2024",
    boards: 3,
    progress: { current: 4, total: 10 },
    onEnterProject: () => alert("Entering Project Apollo"),
    category: "Space",
  },
  {
    projectName: "Project Mercury",
    members: 5,
    duration: "3 months",
    endDate: "Nov 30, 2024",
    boards: 2,
    progress: { current: 6, total: 10 },
    onEnterProject: () => alert("Entering Project Mercury"),
    category: "Space",
  },
  {
    projectName: "Project Gemini",
    members: 12,
    duration: "1 year",
    endDate: "Jun 30, 2025",
    boards: 5,
    progress: { current: 8, total: 15 },
    onEnterProject: () => alert("Entering Project Gemini"),
    category: "Space",
  },
  {
    projectName: "Project Earthrise",
    members: 7,
    duration: "9 months",
    endDate: "Sep 15, 2024",
    boards: 4,
    progress: { current: 3, total: 8 },
    onEnterProject: () => alert("Entering Project Earthrise"),
    category: "Environmental",
  },
  {
    projectName: "Project Nebula",
    members: 10,
    duration: "2 years",
    endDate: "Mar 31, 2026",
    boards: 6,
    progress: { current: 5, total: 20 },
    onEnterProject: () => alert("Entering Project Nebula"),
    category: "Research",
  },
];

export default function Component() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredProjects = dummyProjects.filter(project => 
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'All' || project.category === filter)
  );

  useEffect(() => {
    // Simulate loading data
  }, []);

  const renderSummaryCard = (title : string, count : number, description : string) => (
    <Card elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
      <Box sx={{ flexGrow: 1, mr: 3 }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress variant="determinate" value={100} size={80} thickness={4} sx={{ color: 'primary.main' }} />
        <Box sx={{ position: 'absolute' }}>
          <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
            <CountUp end={count} duration={2} />
          </Typography>
        </Box>
      </Box>
    </Card>
  );
  

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* <Header /> */}
      <Box sx={{ height: 30 }} />
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Typography variant="h4" component="h1" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                projects
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <TextField
                  placeholder="Search projects"
                  variant="outlined"
                  size="small"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />,
                  }}
                />
                <TextField
                  select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  variant="outlined"
                  size="small"
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Space">Space</MenuItem>
                  <MenuItem value="Environmental">Environmental</MenuItem>
                  <MenuItem value="Research">Research</MenuItem>
                </TextField>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={() => alert("Creating a new project")}
                >
                  {isMobile ? '' : 'New Project'}
                </Button>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            {renderSummaryCard("Completed Projects", 45, "Total number of projects that have been completed successfully.")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderSummaryCard("Running Projects", 12, "Projects that are currently ongoing.")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderSummaryCard("Total Boards", 78, "Total number of boards across all projects.")}
          </Grid>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.projectName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {project.category}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {project.members} members
                    </Typography>
                    <Chip label={project.duration} variant="outlined" size="small" />
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Progress
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={(project.progress.current / project.progress.total) * 100} 
                      sx={{ mt: 1, mb: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary" align="right">
                      {Math.round((project.progress.current / project.progress.total) * 100)}%
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    End Date: {project.endDate}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={project.onEnterProject}>Enter Project</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}


