'use client'

import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
  Chip,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import SortIcon from '@mui/icons-material/Sort'
import FilterListIcon from '@mui/icons-material/FilterList'
import AddIcon from '@mui/icons-material/Add'

interface Team {
  id: number
  team_name: string
  member_count: number
  description?: string
}

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([])
  const [newTeamName, setNewTeamName] = useState('')
  const [newTeamDescription, setNewTeamDescription] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [openDialog, setOpenDialog] = useState(false)

  useEffect(() => {
    // Simulating fetching teams from an API
    const mockTeams: Team[] = [
      { id: 1, team_name: 'Alpha Team', member_count: 5, description : '2nd Year Spl Team' },
      { id: 2, team_name: 'Beta Squad', member_count: 3, description : '1st year OOP 1 team' },
      { id: 3, team_name: 'Gamma Group', member_count: 7, description : 'Machine Learning Project Team' },
    ]
    setTeams(mockTeams)
  }, [])

  const handleAddTeam = () => {
    if (newTeamName.trim()) {
      const newTeam: Team = {
        id: teams.length + 1,
        team_name: newTeamName.trim(),
        member_count: 1,
        description: newTeamDescription.trim(),
      }
      setTeams([...teams, newTeam])
      setNewTeamName('')
      setNewTeamDescription('')
      setOpenDialog(false)
    }
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

    const filteredAndSortedTeams = teams
        .filter((team) => team.team_name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.team_name.localeCompare(b.team_name)
        } else {
            return b.team_name.localeCompare(a.team_name)
        }
        })

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Team Management
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpenDialog(true)}>
          Add Team
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Search Teams"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <IconButton onClick={handleSort} color="primary">
          <SortIcon />
        </IconButton>
      </Box>

      <Grid container spacing={3}>
        {filteredAndSortedTeams.map((team) => (
          <Grid item xs={12} sm={6} md={4} key={team.id}>
            <Card>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                <Typography variant="h6" component="div">
                    {team.team_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {team.description}
                  </Typography>
                </Box>
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CircularProgress
                    variant="determinate"
                    value={100}
                    size={80}
                    thickness={5}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                      {team.member_count}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Manage Team
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Team</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Team Name"
            type="text"
            fullWidth
            variant="outlined"
            value={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Team Description"
            type="text"
            fullWidth
            variant="outlined"
            value={newTeamDescription}
            onChange={(e) => setNewTeamDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddTeam} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
} 