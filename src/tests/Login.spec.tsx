import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Login from '../pages/login/Login';

describe('Login', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><Login /></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
