import axios from 'axios';
import dayjs from 'dayjs';
import { Airport, Booking } from '../utils/types';

export async function fetchBookings(authToken: string): Promise<Booking[]> {
  // const {data} = await axios.get(`${getEnv("BACKEND_URL")}/proxy/attractions/all`,
  // {
  //   headers: { Authorization: `Bearer ${authToken}` },
  // });
  // console.log(data);
  // return data;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 'AAA',
          price: 300,
          flights: [{
            from: 'KZN',
            to: 'GSV',
            departure: dayjs().startOf('month').toDate(),
            arrival: dayjs().startOf('month').add(1, 'hour').toDate(),
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
              departure: dayjs().startOf('month').add(10, 'day').toDate(),
              arrival: dayjs().startOf('month').add(10, 'day').add(1, 'hour')
                .toDate(),
              carrier: 'RedWings',
            },
            {
              from: 'KZN',
              to: 'DME',
              departure: dayjs().startOf('month').add(10, 'day').add(3, 'hour')
                .toDate(),
              arrival: dayjs().startOf('month').add(10, 'day').add(4, 'hour')
                .toDate(),
              carrier: 'Pobeda',
            },
          ],
          serviceClass: 'Business',
        },
      ]);
    }, 300);
  });
}

export async function fetchFlights(authToken: string): Promise<Booking[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 'AAA',
          price: 300,
          flights: [{
            from: 'KZN',
            to: 'DME',
            departure: new Date('2022-05-12T03:24:00'),
            arrival: dayjs().startOf('month').add(1, 'hour').toDate(),
            carrier: 'RedWings',
          }],
          serviceClass: 'Economy',
        },
        {
          id: 'BBB',
          price: 700,
          flights: [
            {
              from: 'KZN',
              to: 'GSV',
              departure: new Date('2022-05-12T03:24:00'),
              arrival: dayjs().startOf('month').add(10, 'day').add(1, 'hour')
                .toDate(),
              carrier: 'RedWings',
            },
            {
              from: 'GSV',
              to: 'DME',
              departure: dayjs().startOf('month').add(10, 'day').add(3, 'hour')
                .toDate(),
              arrival: dayjs().startOf('month').add(10, 'day').add(4, 'hour')
                .toDate(),
              carrier: 'Pobeda',
            },
          ],
          serviceClass: 'Business',
        },
        {
          id: 'BBB',
          price: 700,
          flights: [
            {
              from: 'KZN',
              to: 'KUF',
              departure: new Date('2022-05-12T03:24:00'),
              arrival: dayjs().startOf('month').add(10, 'day').add(1, 'hour')
                .toDate(),
              carrier: 'RedWings',
            },
            {
              from: 'KUF',
              to: 'GSV',
              departure: dayjs().startOf('month').add(10, 'day').toDate(),
              arrival: dayjs().startOf('month').add(10, 'day').add(1, 'hour')
                .toDate(),
              carrier: 'RedWings',
            },
            {
              from: 'GSV',
              to: 'DME',
              departure: dayjs().startOf('month').add(10, 'day').add(3, 'hour')
                .toDate(),
              arrival: dayjs().startOf('month').add(10, 'day').add(4, 'hour')
                .toDate(),
              carrier: 'Pobeda',
            },
          ],
          serviceClass: 'Business',
        },
      ]);
    }, 300);
  });
}

export async function fetchAirports(authToken: string): Promise<Airport[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
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
        {
          city: 'Samara',
          name: 'Gagarin',
          iata: 'GSV',
        },
      ]);
    }, 300);
  });
}

export async function createBooking(authToken: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
