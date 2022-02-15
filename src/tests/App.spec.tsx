import App from '../App';
import {render} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'

describe('App', () => {
  it('matches the snapshot', () => {
    const wrapper = render(<BrowserRouter><App/></BrowserRouter>);
    expect(wrapper.baseElement).toMatchSnapshot();
  })
})