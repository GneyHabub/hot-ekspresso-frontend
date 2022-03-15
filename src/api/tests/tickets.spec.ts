import React from 'react';
import { createBooking, fetchAirports, fetchBookings } from '../tickets';

describe('Tickets API', () => {
  it('calls fetchBookings', () => {
    const res = fetchBookings('test');
  });

  it('calls fetchAirports', () => {
    const res = fetchAirports('test');
  });

  it('calls createBooking', () => {
    const res = createBooking('test');
  });
});
