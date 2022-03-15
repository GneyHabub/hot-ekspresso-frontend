import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Notification } from '../Notification/Notification';

describe('Notification', () => {
  describe('error notification', () => {
    it('matches the snapshot', () => {
      const wrapper = render(<BrowserRouter><Notification type="error" message="ecdcads" header="hdbvhjzdg" /></BrowserRouter>);
      expect(wrapper.baseElement).toMatchSnapshot();
    });
  });

  describe('success notification', () => {
    it('matches the snapshot', () => {
      const wrapper = render(<BrowserRouter><Notification type="success" /></BrowserRouter>);
      expect(wrapper.baseElement).toMatchSnapshot();
    });
  });
});
