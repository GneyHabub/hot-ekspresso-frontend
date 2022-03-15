export type FetchingStatus = 'notFetched' | 'fetching' | 'fetched' | 'errorFetching';

export interface Flight {
  from: string;
  to: string;
  departure: Date;
  arrival: Date;
  carrier: string;
}

export type ServiceClasses = 'Economy' | 'Comfort' | 'Business';
export interface Booking {
  id: string;
  price: number;
  flights: Flight[];
  serviceClass: ServiceClasses;
}

export interface Airport {
  city: string;
  name: string;
  iata: string;
}

export interface Passenger {
  name: string;
  surname: string;
  passport: string;
  phoneNumber: string;
}
