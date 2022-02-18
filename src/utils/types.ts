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
  flights: Flight[]

}