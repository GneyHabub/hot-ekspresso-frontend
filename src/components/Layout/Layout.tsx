import { Box } from '@mui/system';
import React from 'react';
import * as colors from '@mui/material/colors';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';

const Layout: React.FC = ({children}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "100px",
        backgroundColor: colors.grey[50]
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Link 
            sx={{ 
              flexGrow: 1,
              cursor: "pointer"
            }} 
            href="/" 
            variant="h6"
            component="div"
            underline="none"
            color="white"
          >
            Hot Ekspresso Travel ✈️
          </Link>
        </Toolbar>
      </AppBar>
        {children}
    </Box>
  )
}

export default Layout;