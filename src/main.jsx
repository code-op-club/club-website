import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import BrowserRouter from 'react'
import Auth0Provider from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
)
