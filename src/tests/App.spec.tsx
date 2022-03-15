import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    isAuthenticated: true,
    isLoading: false,
  }),
}));

describe('App', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><App /></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
