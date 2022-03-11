import { makeAutoObservable } from "mobx";

class newBookingFormStore {
  constructor() {
    makeAutoObservable(this);
  }

  airportOptions = [];
  fromAirport: string | undefined = undefined;
  toAirport: string | undefined = undefined;
}

export default new newBookingFormStore();