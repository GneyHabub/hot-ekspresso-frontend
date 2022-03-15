import { LocalizationProvider } from '@mui/lab';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import BookingItem from '../../pages/tickets/BookingItem';

describe('BookingItem', () => {
  it('matches the snapshot', () => {
    const wrapper = render(
      <BrowserRouter>
        <BookingItem
          booking={{
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
          }}
          idx={1}
          onPick={() => {}}
        />
      </BrowserRouter>,
    );
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
