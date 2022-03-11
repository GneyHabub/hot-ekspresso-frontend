import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Auth0Provider } from "@auth0/auth0-react";
import getEnv from './utils/getEnv';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDayjs';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Auth0Provider
          domain={getEnv("DOMAIN")}
          clientId={getEnv("CLIENT_ID")}
          redirectUri={window.location.origin}
          onRedirectCallback={(appState) => {
            console.log("called");
          }}
        >
          <LocalizationProvider dateAdapter={DateAdapter}>
            <App />
          </LocalizationProvider>
        </Auth0Provider>
      </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
)
