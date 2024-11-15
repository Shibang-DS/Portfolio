import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

import "@fontsource/outfit"
import "@fontsource/roboto"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-27e3g2tyqsofj34i.us.auth0.com"
    clientId="KUHMtB5fj7R5ekSxzBYF0OcF6gJx4crL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
