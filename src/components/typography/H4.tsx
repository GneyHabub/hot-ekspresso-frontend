import { Typography } from '@mui/material';
import React from 'react';

export const H4: React.FC = ({ children }) => (
  <Typography variant="h4" component="h4" gutterBottom>
    {children}
  </Typography>
);
