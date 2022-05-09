import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Layout from '../Layout/Layout';
import {
  H1, H2, H3, H4,
} from '../typography';

describe('Login', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><Layout /></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});

describe('H1', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><H1 /></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});

describe('H2', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><H2 /></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});

describe('H3', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><H3 /></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});

describe('H4', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><H4 /></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
