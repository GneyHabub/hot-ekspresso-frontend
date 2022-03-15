import { creaeBooking, fetchAirports, fetchBookings } from "../tickets"

describe('Tickets API', () => {
  it('calls fetchBookings', () => {
    const res = fetchBookings('test');
  });

  it('calls fetchBookings', () => {
    const res = fetchAirports('test');
  });

  it('calls fetchBookings', () => {
    const res = creaeBooking('test');
  })
})