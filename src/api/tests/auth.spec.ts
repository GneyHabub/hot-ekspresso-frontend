import { login } from '../auth';

describe('Login', () => {
  it('calls login', () => {
    const res = login('aa', 'bb');
  });
});
