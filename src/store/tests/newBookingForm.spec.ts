import store from '../newBookingForm.store';

jest.mock('../../api/tickets', () => ({
  fetchAirports: jest.fn,
  fetchBookings: jest.fn,
}));

describe('newBookingForm store', () => {
  it('has stuff', () => {
    store.fetchAirports('test');
    store.searchFlights('test');
    store.setFromAirport({
      city: 'yy',
      name: 'kk',
      iata: 'JJ',
    });
    store.setToAirport({
      city: 'yy',
      name: 'kk',
      iata: 'JJ',
    });
    store.setDepartureDate(new Date('1995-12-17T03:24:00'));
    store.setServiceClass('Economy');
    store.setSelectedFlight({
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
    });
    store.addPassenger();
    store.setPassengerName(0, 'test');
    store.setPassengerSurname(0, 'test');
    store.setPassengerPassport(0, 'test');
    store.setPassengerPhoneNumber(0, 'test');
    store.deletePassenger(0);
    // eslint-disable-next-line no-unused-expressions
    store.formIsValid;
    store.submit('test');
    store.resetForm();
  });
});
