import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import BrowserRouter from 'react'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>
)

