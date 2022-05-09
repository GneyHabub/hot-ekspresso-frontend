import { CompressOutlined } from '@mui/icons-material';
import { makeAutoObservable, runInAction } from 'mobx';
import { login } from '../api/auth';
import { FetchingStatus } from '../utils/types';
import { notificationStore } from './notification.store';

class AppStore {
  token: string = '';

  tokenFetchingStatus: FetchingStatus = 'notFetched';

  constructor() {
    makeAutoObservable(this);
    this.setToken = this.setToken.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    runInAction(() => {
      this.token = localStorage.getItem('token') || '';
    });
  }

  async login(username: string, password: string) {
    this.tokenFetchingStatus = 'fetching';
    try {
      const token = await login(username, password);
      this.token = token;
      localStorage.setItem('token', token);
      this.tokenFetchingStatus = 'fetched';
    } catch (e) {
      notificationStore.setNotificationFromError(e);
      this.tokenFetchingStatus = 'errorFetching';
    }
  }

  logout() {
    this.token = '';
    localStorage.removeItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }
}

export default new AppStore();
