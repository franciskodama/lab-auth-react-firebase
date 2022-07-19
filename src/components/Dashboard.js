import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { useUserContext } from '../contexts/AuthContext'

const Dashboard = () => {

  const { currentUser, logOutUser } = useUserContext();
  
  return (
    <Card>
    <Card.Body>
        <h1 className='text-center mb-4'>Dashboard </h1>
        <h3 className='mb-2'>Name : {currentUser.displayName}</h3>
        <h3 className='mb-6'>Email : {currentUser.email}</h3>
        <Button className='w-100' onClick={logOutUser}>Log out</Button>
      </Card.Body>
     </Card>
  );
};

export default Dashboard;
