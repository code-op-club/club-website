import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";

// import Auth0ProviderWithHistory from './auth/auth0-provider-with-history.jsx'

// "Vite" magic env vars, sit in the .env in the project root
// console.log(import.meta.env);
const auth0_client_id = import.meta.env.VITE_auth0_client_id;
const auth0_secret = import.meta.env.VITE_auth0_secret;
const auth0_domain = import.meta.env.VITE_auth0_domain;

if (!auth0_client_id || !auth0_secret || !auth0_domain) {
   throw new Error('FORGOT TO SET ENV VARIABLE');
}

// <React.StrictMode> seems to have broken this, so we removed it.
// Meanwhile the Auth0 tutorial is out of date (for pre-v18 React) -
// Don't use ReactDOM.render().
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
         domain={`${auth0_domain}`}
         clientId={`${auth0_client_id}`}
         redirectUri={window.location.origin}
       >
         <App />
    </Auth0Provider>
);
