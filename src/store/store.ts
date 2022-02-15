import { makeAutoObservable, runInAction } from "mobx";

class AppStore {
  token: string | null = null;
  
  constructor() {
    makeAutoObservable(this);
    this.setToken = this.setToken.bind(this);

    runInAction(() => {
      this.token = sessionStorage.getItem('token');
    });
  }

  setToken(token: string) {
    sessionStorage.setItem('token', token);
    this.token = token;
  }
}

export default new AppStore();