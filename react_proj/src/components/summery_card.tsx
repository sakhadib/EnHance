import React from 'react';
import { Card, Box, Typography, CircularProgress } from '@mui/material';
import CountUp from 'react-countup';

interface SummaryCardProps {
  title: string;
  count: number;
  description: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, count, description }) => {
  return (
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
};

export default SummaryCard;
