import Login from '../pages/login/Login';
import {render} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    loginWithRedirect: jest.fn
  })
}))


describe('Login', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><Login/></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  })
})