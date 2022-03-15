import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Login from '../pages/login/Login';

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    loginWithRedirect: jest.fn,
  }),
}));

describe('Login', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><Login /></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
