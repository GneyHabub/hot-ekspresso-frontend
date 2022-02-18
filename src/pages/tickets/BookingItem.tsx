import { Accordion, AccordionDetails, AccordionSummary, Box, colors, Typography } from '@mui/material';
import React from 'react';
import { Booking } from '../../utils/types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import dayjs from 'dayjs';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';

interface Props {
  booking: Booking;
  idx: number;
}

const BookingItem: React.FC<Props> = ({booking, idx}) => {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${idx + 1}a-content`}
          id={`panel${idx + 1}a-content`}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <Typography>{booking.flights[0].from}</Typography>
              <MoreHorizIcon />
            <Typography>{booking.flights[booking.flights.length - 1].to}</Typography>
          </Box>
          <Typography variant="overline" sx={{ml: "10px"}}>
            {dayjs(booking.flights[0].departure).format("DD.MM.YYYY")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
          sx={{
            width: "15%"
          }}
        >
          <Timeline>
            {booking.flights.map(flight => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{flight.from}</TimelineContent>
              </TimelineItem>
            ))}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>{booking.flights[booking.flights.length - 1].to}</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
        </AccordionDetails>
      </Accordion>
  )
}

export default BookingItem;
