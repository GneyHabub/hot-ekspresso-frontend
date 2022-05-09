import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Layout from '../Layout/Layout';

describe('Login', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><Layout /></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
