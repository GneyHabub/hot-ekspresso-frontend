import {
  Button, Card, CardContent, CircularProgress, Typography,
} from '@mui/material';
import React from 'react';
import { observer } from 'mobx-react';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';
import getEnv from '../../utils/getEnv';
import { useAuthToken } from '../../utils/hooks/useAuthToken';
import store from '../../store/tickets.store';
import BookingItem from './BookingItem';

const Tickets: React.FC = observer(() => {
  const navigate = useNavigate();
  const authToken = useAuthToken({
    domain: getEnv('DOMAIN'),
    audience: 'https://dev-od7-l947.us.auth0.com/api/v2/',
    clientId: getEnv('CLIENT_ID'),
    redirectUri: window.location.origin,
  });

  React.useEffect(() => {
    store.fetchBookings(authToken);
  }, [authToken]);

  if (!store.areBookingsFetched) {
    return (
      <Card>
        <CardContent>
          <CircularProgress />
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          paddingBottom: '15px',
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/tickets/new-booking')}
        >
          Create a booking
        </Button>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom component="div">
            My bookings
          </Typography>
          <div>
            {store.bookings.map((b, idx) => (
              <BookingItem idx={idx} booking={b} key={b.id} />
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
});

export default Tickets;
