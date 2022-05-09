import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';

describe('App', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><App /></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
