import {
  Route, Routes, Navigate, useNavigate,
} from 'react-router-dom';
import {
  CircularProgress, Divider, Drawer, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import HotelIcon from '@mui/icons-material/Hotel';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import CloseIcon from '@mui/icons-material/Close';
import { observer } from 'mobx-react';
import Tickets from './pages/tickets/Tickets';
import Login from './pages/login/Login';
import { NotificationContainer } from './components/Notification/NotificationContainer';
import Layout from './components/Layout/Layout';
import Hotels from './pages/hotels/Hotels';
import NewBooking from './pages/tickets/NewBooking';
import store from './store/store';

const App: React.FC = observer(() => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const navigate = useNavigate();
  const { token, tokenFetchingStatus } = store;

  if (tokenFetchingStatus === 'fetching') {
    return (
      <Layout>
        <CircularProgress />
      </Layout>
    );
  }

  if (!token) {
    return (
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
        <NotificationContainer />
      </Layout>
    );
  }

  return (
    <>
      <Layout
        onSidebarOpen={() => setIsSidebarOpen(true)}
      >
        <Routes>
          <Route
            path="/tickets"
            element={<Tickets />}
          />
          <Route
            path="/tickets/new-booking"
            element={<NewBooking />}
          />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="*" element={<Navigate replace to="/tickets" />} />
        </Routes>
        <NotificationContainer />
      </Layout>
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '5px',
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
            <ListItem
              button
              onClick={() => {
                setIsSidebarOpen(false);
                navigate('/tickets');
              }}
            >
              <ListItemIcon>
                <AirplaneTicketIcon />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItem>

            <ListItem
              button
              onClick={() => {
                setIsSidebarOpen(false);
                navigate('/hotels');
              }}
            >
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
  );
});

export default App;
