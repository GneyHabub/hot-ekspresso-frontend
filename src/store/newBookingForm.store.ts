import { makeAutoObservable, runInAction } from "mobx";
import { createBooking, fetchAirports, fetchBookings } from "../api/tickets";
import { Airport, Booking, FetchingStatus, Flight, Passenger, ServiceClasses } from "../utils/types";
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
  selectedFlight: Booking | undefined = undefined;
  passengers: Passenger[] = [{
    name: "",
    surname: "",
    passport: "",
    phoneNumber: ""
  }];
  submittingStatus: FetchingStatus = "notFetched";

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
  setSelectedFlight(flight: Booking | undefined) {
    this.selectedFlight = flight;
  }
  deletePassenger(idx: number) {
    runInAction(() => {
      this.passengers.splice(idx, 1);
    })
  }
  addPassenger() {
    runInAction(() => {
      this.passengers.push({
        name: "",
        surname: "",
        passport: "",
        phoneNumber: ""
      });
    });
  }
  setPassengerName(idx: number, name: string) {
    runInAction(() => {
      this.passengers[idx].name = name;
    });
  }
  setPassengerSurname(idx: number, surname: string) {
    runInAction(() => {
      this.passengers[idx].surname = surname;
    });
  }
  setPassengerPassport(idx: number, passport: string) {
    runInAction(() => {
      this.passengers[idx].passport = passport;
    });
  }
  setPassengerPhoneNumber(idx: number, phoneNumber: string) {
    runInAction(() => {
      this.passengers[idx].phoneNumber = phoneNumber;
    });
  }

  get formIsValid() {
    return this.fromAirport && this.toAirport;
  }

  async submit(authToken: string) {
    this.submittingStatus = "fetching";
    try {
      await createBooking(authToken);
      this.submittingStatus = "fetched";
      notificationStore.setNotification({
        type: "success",
        message: "Successfully researved a flight!"
      })
    } catch(e) {
      this.submittingStatus = "errorFetching";
      notificationStore.setNotificationFromError(e);
    }
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