import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mocked } from 'ts-jest/utils';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDayjs';
import NewBooking from '../NewBooking';

jest.mock('../../../store/newBookingForm.store', () => ({
  submittingStatus: 'fetched',
  airportsfetchingStatus: 'fetched',
  resetForm: jest.fn(),
  fetchAirports: jest.fn(),
}));

describe('NewBooking', () => {
  describe('when authenticated', () => {
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

  describe('when not authenticated', () => {
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
});
