import axios from 'axios';
import dayjs from 'dayjs';
import { Airport, Booking } from '../utils/types';

export async function fetchBookings(authToken: string): Promise<Booking[]> {
  const { data } = await axios.get(
    `${process.env.BACKEND_URL}/bookings`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    },
  );
  return data;
}

export async function fetchFlights(authToken: string): Promise<Booking[]> {
  const { data } = await axios.get(
    `${process.env.BACKEND_URL}/flights`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    },
  );
  return data;
}

export async function fetchAirports(authToken: string): Promise<Airport[]> {
  const { data } = await axios.get(
    `${process.env.BACKEND_URL}/airports`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    },
  );
  return data;
}

export async function createBooking(authToken: string): Promise<void> {
  const { data } = await axios.post(
    `${process.env.BACKEND_URL}/bookings`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    },
  );
  return data;
}
