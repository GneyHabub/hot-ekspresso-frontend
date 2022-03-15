import { Typography } from '@mui/material';
import React from 'react';

export const H2: React.FC = ({ children }) => (
  <Typography variant="h2" component="h2" gutterBottom>
    {children}
  </Typography>
);
