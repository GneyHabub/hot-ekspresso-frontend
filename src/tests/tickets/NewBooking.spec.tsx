import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDayjs';
import React from 'react';
import store from '../../store/newBookingForm.store';
import NewBooking from '../../pages/tickets/NewBooking';

jest.mock('../../store/newBookingForm.store', () => ({
  fetchAirports: jest.fn,
  resetForm: jest.fn,
  airportsfetchingStatus: 'fetched',
  airports: [
    {
      city: 'Moscow',
      name: 'Domodedovo',
      iata: 'DME',
    },
    {
      city: 'Moscow',
      name: 'Vnukovo',
      iata: 'VKO',
    },
    {
      city: 'Kazan',
      name: 'Kazan',
      iata: 'KZN',
    },
    {
      city: 'Saratov',
      name: 'Gagarin',
      iata: 'GSV',
    },
  ],
  setFromAirport: jest.fn,
  setToAirport: jest.fn,
  departureDate: new Date('1995-12-17T03:24:00'),
  setDepartureDate: jest.fn,
  serviceClass: 'Business',
  setServiceClass: jest.fn(),
  formIsValid: true,
  setSelectedFlight: jest.fn,
  searchFlights: jest.fn,
  selectedFlight: {
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
  passengers: [{
    name: '',
    surname: '',
    passport: '',
    phoneNumber: '',
  }],
  flights: [
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

describe('NewBooking', () => {
  it('matches the snapshot', () => {
    const wrapper = render(
      <LocalizationProvider dateAdapter={DateAdapter}>
        <BrowserRouter>
          <NewBooking />
        </BrowserRouter>
      </LocalizationProvider>,
    );
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
