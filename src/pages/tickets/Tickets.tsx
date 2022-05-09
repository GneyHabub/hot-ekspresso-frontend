import {
  Button, Card, CardContent, CircularProgress, Typography,
} from '@mui/material';
import React from 'react';
import { observer } from 'mobx-react';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';
import store from '../../store/tickets.store';
import BookingItem from './BookingItem';
import authStore from '../../store/store';

const Tickets: React.FC = observer(() => {
  const navigate = useNavigate();
  const { token } = authStore;

  React.useEffect(() => {
    store.fetchBookings(token);
  }, [token]);

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
