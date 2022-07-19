import React from "react";
import { Container } from 'react-bootstrap'
import { useUserContext } from '../contexts/AuthContext'
import Dashboard from "./Dashboard";
import Auth from "./Auth";
import '../styles/App.css'

function App() {

  const { loading, error, currentUser } = useUserContext()

  return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
          <div className="w-100" style={{ maxWidth: "400px"}}>
            {error && <p className='error'>{error}</p>}
            {loading ? <h2>Loading...</h2> : <> {currentUser ? <Dashboard /> : <Auth />}</>}
          </div>
        </Container>
  );
}

export default App;
