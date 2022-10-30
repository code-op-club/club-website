import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";
// import 'fetch';

function App() {
  const [count, setCount] = useState(0)
  const { getIdTokenClaims,  user, loginWithRedirect, isAuthenticated, logout, getAccessTokenSilently } = useAuth0();
  const [apiResponse, setApiResponse] = useState({});

  useEffect(() => {
    const asyncCall = async () => {
      console.log("Auth0 User: ", user);
      
      // Note - if not logged into Auth0, these will cause crashes
      const access_token = await getAccessTokenSilently();
      const claims = await getIdTokenClaims();

      console.log('CLAIMS:', claims, claims?.__raw);

      fetch("/api/user-billing-status/", {
        headers: {
          Authorization: `Bearer ${claims?.__raw}`,
        }
      })
        .then(res => res.json())
        .then(
          (json) => {
            console.log('got json: ', json);
            setApiResponse(json);
          }
        );
    };
    if (isAuthenticated) {
      asyncCall();  // fire and forget
    }
  }, [isAuthenticated]);

  let authWidget;
  if (!isAuthenticated) {
    authWidget = (
        <button onClick={() => loginWithRedirect()}>Log In</button>
    );
  } else {
    authWidget = (
        <div>
          <div> Welcome {user.name}!</div>
          <button onClick={() => logout()}>Log Out</button>
        </div>
    );
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br/>
        Auth0 EXPERIMENTAL:
        { authWidget }
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        Server Response: {new String(apiResponse.status)}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
