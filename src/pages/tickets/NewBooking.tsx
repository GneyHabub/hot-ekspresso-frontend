import { Search } from '@mui/icons-material';
import { MobileDatePicker } from '@mui/lab';
import { Autocomplete, Box, Button, Card, CardContent, CircularProgress, colors, FormControl, IconButton, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import store from '../../store/newBookingForm.store';
import getEnv from '../../utils/getEnv';
import { useAuthToken } from '../../utils/hooks/useAuthToken';
import { ServiceClasses } from '../../utils/types';
import BookingItem from './BookingItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';
import dayjs from 'dayjs';
import PhoneNumberInput from "material-ui-phone-number";
import { useNavigate } from 'react-router';

const NewBooking: React.FC = observer(() => {
  const authToken = useAuthToken({
    domain: getEnv("DOMAIN"),
    audience: "https://dev-od7-l947.us.auth0.com/api/v2/",
    clientId: getEnv("CLIENT_ID"),
    redirect_uri: window.location.origin,
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    if(authToken) {
      store.fetchAirports(authToken);
    }
    return(() => {
      store.resetForm();
    })
  }, [authToken]);

  React.useEffect(() => {
    if(store.submittingStatus === "fetched") {
      navigate("/tickets");
    }
  }, [store.submittingStatus]);

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
            onClick={() => {
              store.setSelectedFlight(undefined)
              store.searchFlights(authToken)
            }}
          >
            Search flights
          </Button>
        </Box>
        </CardContent>
      </Card>
      {store.flightsFetchingStatus === "fetching" &&
        <CircularProgress />
      }
      {store.flightsFetchingStatus === "fetched" && store.flights.length !== 0 && !store.selectedFlight &&
        <Card>
          <CardContent> 
            {store.flights.map((b, idx) => (
                <BookingItem idx={idx} booking={b} key={b.id} onPick={(booking) => store.setSelectedFlight(booking)}/>
              ))}
          </CardContent>
        </Card>
      }
      {store.selectedFlight &&
        <Card
          raised
          sx={{
            color: "white",
            background: `linear-gradient(145deg, ${colors.blue[500]}, ${colors.blue.A700})`,
            padding: "20px"
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              alignItems="center"
              gap="10px"
            >
              <Typography variant="h4">
                {store.selectedFlight.flights[0].from}
              </Typography>
              <ArrowForwardIcon />
              {store.selectedFlight.flights.slice(1).map(flight => (
                <>
                  <Typography variant="h6">
                    {flight.from}
                  </Typography>
                  <ArrowForwardIcon />
                </>
              ))}
              <Typography variant="h4">
                {store.selectedFlight.flights[store.selectedFlight.flights.length - 1].to}
              </Typography>
            </Stack>

            <IconButton
              onClick={() => store.setSelectedFlight(undefined)}
              sx={{
                color: "white"
              }}
            >
              <CancelIcon fontSize="large" />
            </IconButton>
          </Stack>
          <Typography variant="subtitle1">
            {dayjs(store.selectedFlight.flights[0].departure).format("DD-MM-YYYY")}
          </Typography>
        </Card>
      }
      {store.selectedFlight !== undefined &&
        <>
          {store.passengers.map((p, idx) => (
            <Card key={idx}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {`Passenger #${idx + 1}`}
                  </Typography>
                  {idx !== 0 &&
                    <IconButton
                      onClick={() => store.deletePassenger(idx)}
                    >
                      <CancelIcon fontSize="medium" />
                    </IconButton>
                  }
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "1fr 1fr",
                    gap: "12px",
                    "& .MuiFilledInput-input": {
                      backgroundColor: "white"
                    },
                    "& .phone-input": {
                      backgroundColor: "white",
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                      borderRadius: "4px"
                    }
                  }}
                >
                  <TextField value={p.name} label="Name" onChange={(e) => store.setPassengerName(idx, e.target.value)}/>
                  <TextField value={p.surname} label="Surname" onChange={(e) => store.setPassengerSurname(idx, e.target.value)}/>
                  <TextField value={p.passport} label="Passport number" onChange={(e) => store.setPassengerPassport(idx, e.target.value)}/>
                  <PhoneNumberInput 
                    value={p.phoneNumber} 
                    defaultCountry={'ua'} 
                    variant="filled"
                    inputClass="phone-input"
                    onChange={(value) => {
                    if (typeof value === "string") {
                      store.setPassengerPhoneNumber(idx, value)
                    }
                  }} />
                </Box>
              </CardContent>
            </Card>
          ))}
          <Button
            variant='outlined'
            onClick={() => store.addPassenger()}
            sx={{
              width: "150px"
            }}
          >
            Add passenger
          </Button>
          <Button
            variant='contained'
            onClick={() => store.submit(authToken)}
            sx={{
              width: "300px",
              alignSelf: "center"
            }}
          >
            Reserve
          </Button>
        </>
      }
    </Box>
  )
});

export default NewBooking;