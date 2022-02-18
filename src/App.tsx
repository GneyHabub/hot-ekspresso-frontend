import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { NotificationContainer } from './components/Notification/NotificationContainer';
import Login from './pages/login/Login';
import Tickets from './pages/tickets/Tickets';
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress, Divider, Drawer, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import HotelIcon from '@mui/icons-material/Hotel';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import CloseIcon from '@mui/icons-material/Close';

const App: React.FC = () => {
  const {isAuthenticated, isLoading} = useAuth0();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  if(isLoading) {
    return (
    <Layout>
      <CircularProgress />
    </Layout>)
  }

  if(!isAuthenticated) {
    return(
      <Layout>
        <Routes>
          <Route path='/login'element={<Login/>}/>
          <Route path='*' element={<Navigate replace to="/login"/>}/>
        </Routes>
        <NotificationContainer/>
      </Layout>
    );
  }

  return (
    <>
      <Layout
        onSidebarOpen={() => setIsSidebarOpen(true)}
      >
        <Routes>
          <Route path='/'element={<Tickets/>}/>
          <Route path='*' element={<Navigate replace to="/"/>}/>
        </Routes>
        <NotificationContainer/>
      </Layout>
      <Drawer
        anchor={'left'}
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <Box
          sx={{
            width: 250
          }}
          role="presentation"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "5px"
            }}
          >
            <IconButton
              onClick={() => setIsSidebarOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <AirplaneTicketIcon />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <HotelIcon />
              </ListItemIcon>
              <ListItemText primary="Hotels" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ModeOfTravelIcon />
              </ListItemIcon>
              <ListItemText primary="Trip planning" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
};

export default App