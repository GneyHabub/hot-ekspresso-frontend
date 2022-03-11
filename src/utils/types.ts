export type FetchingStatus = "notFetched" | "fetching" | "fetched" | "errorFetching";

export interface Flight {
  from: string;
  to: string;
  departure: Date;
  arrival: Date;
  carrier: string;
}
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

export type ServiceClasses = "Economy" | "Comfort" | "Business";