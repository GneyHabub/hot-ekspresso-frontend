import { useAuth0 } from '@auth0/auth0-react';
import { Autocomplete, Card, CardContent, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React from 'react'
import getEnv from '../../utils/getEnv';
import { useAuthToken } from '../../utils/hooks/useAuthToken';
import store from '../../store/tickets.store';
import BookingItem from './BookingItem';

const Tickets: React.FC = () => {
  const {user} = useAuth0();
  const authToken = useAuthToken({
    domain: getEnv("DOMAIN"),
    audience: "https://dev-od7-l947.us.auth0.com/api/v2/",
    clientId: getEnv("CLIENT_ID"),
    redirect_uri: window.location.origin,
  });

  React.useEffect(() => {
    store.fetchBookings(authToken);
  }, [authToken]);

  if(!store.areBookingsFetched) {
    return (
      <Card>
        <CardContent> 
          <CircularProgress/>
        </CardContent>
      </Card>
  )}

  return (
      <Card>
        <CardContent> 
        <Typography variant="h4" gutterBottom component="div">
          My bookings
        </Typography>
          <div>
            {store.bookings.map((b, idx) => (
              <BookingItem idx={idx} booking={b} key={b.id}/>
            ))}
          </div>
        </CardContent>
      </Card>
  )}

export default Tickets;
