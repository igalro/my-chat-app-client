import React from 'react';
import './App.css';
import useToken from './hooks/useToken';
import AppRoutes from "./components/Routes";
import LoginPage from "./components/Auth/LoginPage";

function App() {
    const { token, setToken } = useToken();

    if(!token) {
        return <LoginPage setToken={setToken}/>
    }

    return (
            <div className="App">
                <AppRoutes setToken={setToken} />
            </div>
  );
}

export default App;
