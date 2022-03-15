import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  colors,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import dayjs from 'dayjs';
import {
  Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator,
} from '@mui/lab';
import { Booking } from '../../utils/types';

interface Props {
  booking: Booking;
  idx: number;
  onPick?: (b: Booking) => void;
}

const BookingItem: React.FC<Props> = ({ booking, idx, onPick }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`panel${idx + 1}a-content`}
      id={`panel${idx + 1}a-content`}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Typography>{booking.flights[0].from}</Typography>
        <MoreHorizIcon />
        <Typography>{booking.flights[booking.flights.length - 1].to}</Typography>
      </Box>
      <Typography variant="overline" sx={{ ml: '10px' }}>
        {dayjs(booking.flights[0].departure).format('DD.MM.YYYY')}
      </Typography>
    </AccordionSummary>
    <AccordionDetails
      sx={{
        display: 'flex',
        gap: '5px',
      }}
    >
      <Box
        sx={{
          width: '20%',
          padding: '15px',
        }}
      >
        <Typography variant="subtitle1" fontSize="18px">Route</Typography>
        <Timeline>
          {booking.flights.map((flight) => (
            <TimelineItem key={flight.from}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {flight.from}
              </TimelineContent>
            </TimelineItem>
          ))}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                paddingBottom: 0,
              }}
            >
              {booking.flights[booking.flights.length - 1].to}
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box
          sx={{
            padding: '15px',
          }}
        >
          <Typography variant="subtitle1" fontSize="18px">
            <b>Price:</b>
            {' '}
            ₸
            {booking.price}
          </Typography>
          <Typography variant="subtitle1" fontSize="18px">
            <b>Departure:</b>
            {' '}
            {dayjs(booking.flights[0].departure).format('DD.MM.YYYY HH:mm')}
          </Typography>
          <Typography variant="subtitle1" fontSize="18px">
            <b>Arrival:</b>
            {' '}
            {dayjs(booking.flights[booking.flights.length - 1].arrival).format('DD.MM.YYYY HH:mm')}
          </Typography>
          <Typography variant="subtitle1" fontSize="18px">
            <b>Service Class:</b>
            {' '}
            {booking.serviceClass}
          </Typography>
        </Box>
        {onPick
              && (
              <Button
                variant="contained"
                onClick={() => onPick(booking)}
                sx={{
                  alignSelf: 'center',
                }}
              >
                Choose
              </Button>
              )}
      </Box>
    </AccordionDetails>
  </Accordion>
);

export default BookingItem;
