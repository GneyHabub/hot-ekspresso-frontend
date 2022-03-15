import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Tickets from '../../pages/tickets/Tickets';

jest.mock('../../store/tickets.store', () => ({
  fetchBookings: jest.fn,
  areBookingsFetched: true,
  bookings: [
    {
      id: 'AAA',
      price: 300,
      flights: [{
        from: 'KZN',
        to: 'GSV',
        departure: new Date('1995-12-17T03:24:00'),
        arrival: new Date('1995-12-17T03:24:00'),
        carrier: 'RedWings',
      }],
      serviceClass: 'Economy',
    },
    {
      id: 'BBB',
      price: 700,
      flights: [
        {
          from: 'GSV',
          to: 'KZN',
          departure: new Date('1995-12-17T03:24:00'),
          arrival: new Date('1995-12-17T03:24:00'),
          carrier: 'RedWings',
        },
        {
          from: 'KZN',
          to: 'DME',
          departure: new Date('1995-12-17T03:24:00'),
          arrival: new Date('1995-12-17T03:24:00'),
          carrier: 'Pobeda',
        },
      ],
      serviceClass: 'Business',
    },
  ],
}));

describe('Login', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><Tickets /></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
