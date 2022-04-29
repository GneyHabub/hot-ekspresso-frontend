import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mocked } from 'ts-jest/utils';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDayjs';
import { useAuthToken } from '../../../utils/hooks/useAuthToken';
import NewBooking from '../NewBooking';

jest.mock('../../../utils/hooks/useAuthToken', () => ({
  useAuthToken: jest.fn(),
}));
jest.mock('../../../store/newBookingForm.store', () => ({
  submittingStatus: 'fetched',
  airportsfetchingStatus: 'fetched',
  resetForm: jest.fn(),
  fetchAirports: jest.fn(),
}));
const mockedAuth = mocked(useAuthToken, true);

describe('NewBooking', () => {
  describe('when authenticated', () => {
    it('matches the snapshot', () => {
      mockedAuth.mockReturnValueOnce('ssss');
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
      mockedAuth.mockReturnValueOnce('');
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
