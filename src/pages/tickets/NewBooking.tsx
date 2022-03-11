import { Autocomplete, Box, Card, CardContent, Divider, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import store from '../../store/newBookingForm.store';

const NewBooking: React.FC = observer(() => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
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
              width: "70%"
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: "15px"
            }}
            className="form-block"
          >
            <Typography variant="h5" gutterBottom component="div">
              Route
            </Typography>
            <Autocomplete
              freeSolo
              options={store.airportOptions}
              renderInput={(params) => <TextField {...params} label="From" />}
            />
            <Autocomplete
              freeSolo
              options={store.airportOptions}
              renderInput={(params) => <TextField {...params} label="To" />}
            />
          </Box>
          <Divider flexItem/>
        </Box>
        </CardContent>
      </Card>
    </Box>
  )
});

export default NewBooking;