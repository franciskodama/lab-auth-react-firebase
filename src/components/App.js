import React from "react";
import Signup from "./Signup";
import { Container } from 'react-bootstrap'
import AuthProvider from "../contexts/AuthContext"
import { useUserContext } from '../contexts/AuthContext'
function App() {

  const { loading, error, currentUser } = useUserContext()

  return (
      <AuthProvider>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
          <div className="w-100" style={{ maxWidth: "400px"}}>
            {error && <p className='error'>{error}</p>}
            {loading ? <h2>Loading...</h2> : <> {currentUser ? <Dashboard /> : <Auth />}</>}

            <Signup />
          </div>
        </Container>
      </AuthProvider>
  );
}

export default App;
