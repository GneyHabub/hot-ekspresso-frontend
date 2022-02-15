import { makeAutoObservable, runInAction } from "mobx";
import { login } from "../api/authentication";
import { FetchingStatus } from "../utils/types";
import { notificationStore } from "./notification.store";
import store from "./store";

class LoginStore {
  fetchingStatus: FetchingStatus = "notFetched";
  email: string = '';
  password: string = '';
  constructor() {
    makeAutoObservable(this);
    this.submit = this.submit.bind(this);
  }

  setEmail(email: string) {
    this.email = email;
  }
  setPassword(password: string) {
    this.password = password;
  }
  async submit() {
    runInAction(() => {
      this.fetchingStatus = "fetching";
    });
    try {
      const token = await login({email: this.email, password: this.password});
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
}

export default new LoginStore();