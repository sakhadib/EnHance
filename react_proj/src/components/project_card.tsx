import { Card, Typography, Button, Box, LinearProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

interface ProjectCardProps {
  projectName: string
  members: number
  duration: string // e.g., "6 months"
  endDate: string // e.g., "Dec 31, 2024"
  boards: number
  progress: {
    current: number
    total: number
  }
  onEnterProject?: () => void
}

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  maxWidth: 800,
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}))

const LeftSection = styled(Box)(({ theme }) => ({
  background: '#1a1b3a',
  color: 'white',
  padding: theme.spacing(4),
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}))

const RightSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}))

const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 2,
  backgroundColor: '#e0e0e0',
  '.MuiLinearProgress-bar': {
    backgroundColor: '#1a1b3a',
  },
}))

export default function ProjectCard({
  projectName = 'Project Apollo',
  members = 8,
  duration = '6 months',
  endDate = 'Dec 31, 2024',
  boards = 3,
  progress = { current: 4, total: 10 },
  onEnterProject = () => {},
}: ProjectCardProps) {
  return (
    <StyledCard>
      <LeftSection>
        <Box>
          <Typography variant="overline" sx={{ opacity: 0.7 }}>
            PROJECT
          </Typography>
          <Typography variant="h5" sx={{ mt: 1, fontWeight: 'bold' }}>
            {projectName}
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>Members:</strong> {members}
          </Typography>
          <Typography variant="body2">
            <strong>Duration:</strong> {duration}
          </Typography>
          <Typography variant="body2">
            <strong>End Date:</strong> {endDate}
          </Typography>
          <Typography variant="body2">
            <strong>Boards:</strong> {boards}
          </Typography>
        </Box>
      </LeftSection>
      
      <RightSection>
        <Box>
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            PROGRESS
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {progress.current}/{progress.total} Tasks Completed
            </Typography>
          </Box>
          <StyledProgress variant="determinate" value={(progress.current / progress.total) * 100} />
        </Box>
        
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#1a1b3a',
              borderRadius: '20px',
              '&:hover': {
                bgcolor: '#2a2b4a',
              },
            }}
            onClick={onEnterProject}
          >
            Enter Project
          </Button>
        </Box>
      </RightSection>
    </StyledCard>
  )
}
