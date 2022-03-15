import store from '../newBookingForm.store';

jest.mock("../../api/tickets", () => ({
  fetchAirports: jest.fn,
  fetchBookings: jest.fn
}))

describe('newBookingForm store', () => {
  it('has stuff', () => {
    store.fetchAirports("test");
    store.searchFlights("test");
    store.setFromAirport("test");
    store.setToAirport("test");
    store.setDepartureDate(new Date('1995-12-17T03:24:00'));
    store.setServiceClass("Economy");
    store.setSelectedFlight({
      id: "AAA",
      price: 300,
      flights: [{
        from: "KZN", 
        to: "GSV", 
        departure: new Date('1995-12-17T03:24:00'), 
        arrival: new Date('1995-12-17T03:24:00'),
        carrier: "RedWings"
      }],
      serviceClass: "Economy",
    });
    store.addPassenger();
    store.setPassengerName(0, "test");
    store.setPassengerSurname(0, "test");
    store.setPassengerPassport(0, "test");
    store.setPassengerPhoneNumber(0, "test");
    store.resetForm();
  })
})