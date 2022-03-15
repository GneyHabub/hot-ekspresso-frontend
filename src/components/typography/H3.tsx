import { Typography } from '@mui/material';
import React from 'react';

export const H3: React.FC = ({ children }) => (
  <Typography variant="h3" component="h3" gutterBottom>
    {children}
  </Typography>
);
