import { makeAutoObservable } from "mobx";
import { fetchAirports, fetchBookings } from "../api/tickets";
import { Airport, Booking, FetchingStatus, Flight, ServiceClasses } from "../utils/types";
import { notificationStore } from "./notification.store";

class newBookingFormStore {
  airports: Airport[] = [];
  airportsfetchingStatus: FetchingStatus = "notFetched";
  fromAirport: Airport | null = null;
  toAirport: Airport | null = null;
  departureDate: Date = new Date();
  serviceClass: ServiceClasses = "Economy";
  flights: Booking[] = [];
  flightsFetchingStatus: FetchingStatus = "notFetched";

  constructor() {
    makeAutoObservable(this);
    this.fetchAirports = this.fetchAirports.bind(this);
  }

  async fetchAirports(authToken: string) {
    this.airportsfetchingStatus = "fetching";
    try {
      this.airports = await fetchAirports(authToken);
      this.airportsfetchingStatus = "fetched";
    } catch(e) {
      notificationStore.setNotificationFromError(e);
    }
  }
  async searchFlights(authToken: string) {
    this.flightsFetchingStatus = "fetching";
    try {
      this.flights = await fetchBookings(authToken);
      this.flightsFetchingStatus = "fetched";
    } catch(e) {
      this.flightsFetchingStatus = "errorFetching";
      notificationStore.setNotificationFromError(e);
    }
  }

  setFromAirport(airport: string | Airport | null) {
    if(typeof airport !== "string" ) {
      this.fromAirport = airport;
    }
  }
  setToAirport(airport: string | Airport | null) {
    if(typeof airport !== "string" ) {
      this.toAirport = airport;
    }
  }
  setDepartureDate(date: Date) {
    this.departureDate = date;
  }
  setServiceClass(sc: ServiceClasses) {
    this.serviceClass = sc;
  }

  get formIsValid() {
    return this.fromAirport && this.toAirport;
  }

  resetForm() {
    this.airports = [];
    this.airportsfetchingStatus = "notFetched";
    this.fromAirport = null;
    this.toAirport = null;
    this.departureDate = new Date();
    this.serviceClass = "Economy";
    this.flights = [];
    this.flightsFetchingStatus = "notFetched";
  }
}

export default new newBookingFormStore();