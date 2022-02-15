import { makeAutoObservable, runInAction } from "mobx";
import { register } from "../api/authentication";
import { FetchingStatus } from "../utils/types";
import { notificationStore } from "./notification.store";
import store from "./store";

class RegisterStore {
  fetchingStatus: FetchingStatus = "notFetched";
  name: string = '';
  nameDirty: boolean = false;
  email: string = '';
  emailDirty: boolean = false;
  password: string = '';
  passwordDirty: boolean = false;
  repeatPassword: string = '';

  constructor() {
    makeAutoObservable(this);
    this.submit = this.submit.bind(this);
  }

  setName(name: string) {
    this.name = name;
  }
  dirtyName() {
    this.nameDirty = true;
  }
  setEmail(email: string) {
    this.email = email;
  }
  dirtyEmail() {
    this.emailDirty = true;
  }
  setPassword(password: string) {
    this.password = password;
  }
  dirtyPassword() {
    this.passwordDirty = true;
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
  get nameError() {
    return !this.name;
  }
  get emailError() {
    return !this.email;
  }
  get passwordError() {
    return !this.password;
  }
}

export default new RegisterStore();