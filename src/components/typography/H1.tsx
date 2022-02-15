import { Typography } from '@mui/material'
import React from 'react'

export const H1: React.FC = ({children}) => {
  return (
    <Typography variant="h1" component="h1" gutterBottom>
      {children}
    </Typography>
  )
};
