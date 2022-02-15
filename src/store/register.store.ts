import { makeAutoObservable, runInAction } from "mobx";
import { register } from "../api/authentication";
import { FetchingStatus } from "../utils/types";
import { notificationStore } from "./notification.store";
import store from "./store";

class RegisterStore {
  fetchingStatus: FetchingStatus = "notFetched";
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  constructor() {
    makeAutoObservable(this);
    this.submit = this.submit.bind(this);
  }

  setName(name: string) {
    this.name = name;
  }
  setSurname(surname: string) {
    this.surname = surname;
  }
  setEmail(email: string) {
    this.email = email;
  }
  setPassword(password: string) {
    this.password = password;
  }
  setRepeatPassword(repeatPassword: string) {
    this.repeatPassword = repeatPassword;
  }
  async submit() {
    runInAction(() => {
      this.fetchingStatus = "fetching";
    });
    try {
      const token = await register({
        name: this.name,
        surname: this.surname,
        email: this.email, 
        password: this.password
      });
      store.setToken(token);
      runInAction(() => {
        this.fetchingStatus = "fetching";
      })
    } catch(e) {
      notificationStore.setNotificationFromError(e);
      this.fetchingStatus = "errorFetching";
    }
  }

  get isFetching() {
    return this.fetchingStatus === "fetching"
  }
  get passwordsMatch() {
    return this.password.localeCompare(this.repeatPassword) === 0;
  }
}

export default new RegisterStore();