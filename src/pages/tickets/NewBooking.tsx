import { Search } from '@mui/icons-material';
import { MobileDatePicker } from '@mui/lab';
import { Autocomplete, Box, Button, Card, CardContent, CircularProgress, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import store from '../../store/newBookingForm.store';
import getEnv from '../../utils/getEnv';
import { useAuthToken } from '../../utils/hooks/useAuthToken';
import { ServiceClasses } from '../../utils/types';
import BookingItem from './BookingItem';

const NewBooking: React.FC = observer(() => {
  const authToken = useAuthToken({
    domain: getEnv("DOMAIN"),
    audience: "https://dev-od7-l947.us.auth0.com/api/v2/",
    clientId: getEnv("CLIENT_ID"),
    redirect_uri: window.location.origin,
  });

  React.useEffect(() => {
    if(authToken) {
      store.fetchAirports(authToken);
    }
    return(() => {
      store.resetForm();
    })
  }, [authToken]);

  if(store.airportsfetchingStatus !== "fetched") {
    return <CircularProgress />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: "15px"
      }}
    >
      <Card>
        <CardContent> 
        <Typography variant="h4" gutterBottom component="div">
          New booking
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: "20px",
            alignItems: "center",
            "& > .form-block": {
              width: "80%"
            }
          }}
        >
          <FormControl
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: "15px",
              "& > *": {
                display: 'flex',
                justifyContent: "space-evenly",
                gap: "7px"
              }
            }}
            className="form-block"
          >
            <Box>
              <Autocomplete
                freeSolo
                sx={{
                  width: "50%"
                }}
                getOptionLabel={(airport) => `${airport.iata} - ${airport.city}`}
                options={store.airports}
                renderInput={(params) => <TextField required {...params} label="From" />}
                onChange={(e, value) => store.setFromAirport(value)}
              />
              <Autocomplete
                freeSolo
                sx={{
                  width: "50%"
                }}
                getOptionLabel={(airport) => `${airport.iata} - ${airport.city}`}
                options={store.airports}
                renderInput={(params) => <TextField required {...params} label="To" />}
                onChange={(e, value) => store.setToAirport(value)}
              />
            </Box>
            <Box>
              <MobileDatePicker
                label="Date mobile"
                inputFormat="DD/MM/YYYY"
                value={store.departureDate}
                renderInput={(params) => <TextField {...params} sx={{width: "50%"}} label="Departure Date" />}
                onChange={(value) => store.setDepartureDate(value || new Date())}
              />
              <Select
                sx={{
                  width: "50%"
                }}
                value={store.serviceClass}
                onChange={(e) => store.setServiceClass(e.target.value as ServiceClasses)}
              >
                {["Economy", "Comfort", "Business"].map(serviceClass => <MenuItem key={serviceClass} value={serviceClass}>{serviceClass}</MenuItem>)}
              </Select>
            </Box>
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            disabled={!store.formIsValid}
            startIcon={<Search />}
            onClick={() => store.searchFlights(authToken)}
          >
            Search flights
          </Button>
        </Box>
        </CardContent>
      </Card>
      {store.flightsFetchingStatus === "fetching" &&
        <CircularProgress />
      }
      {store.flightsFetchingStatus === "fetched" && store.flights.length !== 0 &&
      <Card>
        <CardContent> 
          {store.flights.map((b, idx) => (
              <BookingItem idx={idx} booking={b} key={b.id} onPick={(id) => alert(id)}/>
            ))}
        </CardContent>
      </Card>
      }
    </Box>
  )
});

export default NewBooking;