import { makeAutoObservable } from "mobx";
import { fetchBookings } from "../api/tickets";
import { Booking, FetchingStatus } from "../utils/types";
import { notificationStore } from "./notification.store";

class TicketsStore {
  bookings: Booking[] = [];
  bookingFetchingStatus: FetchingStatus = "notFetched";
  constructor() {
    makeAutoObservable(this);
  }

  async fetchBookings(authToken: string) {
    this.bookingFetchingStatus = "fetching";
    try {
      this.bookings = await fetchBookings(authToken);
      this.bookingFetchingStatus = "fetched";
    } catch(e) {
      this.bookingFetchingStatus = "errorFetching";
      notificationStore.setNotificationFromError(e);
    }
  }

  get areBookingsFetched() {
    return this.bookingFetchingStatus === "fetched";
  }
}

export default new TicketsStore();