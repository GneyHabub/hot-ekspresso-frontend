
import {render} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import Layout from '../Layout/Layout'

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    isAuthenticated: true,
    logout: jest.fn
  })
}))


describe('Login', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><Layout/></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  })
})