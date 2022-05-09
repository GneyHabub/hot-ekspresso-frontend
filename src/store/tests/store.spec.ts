import store from '../store';

describe('store', () => {
  it('has stuff', () => {
    store.login('ss', 'wew');
    store.logout();
    store.setToken('dd');
  });
});
