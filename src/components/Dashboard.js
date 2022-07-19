import React from "react";
import { useUserContext } from '../contexts/AuthContext'

const Dashboard = () => {
  const { currentUser, logOutUser } = useUserContext();
  return (
    <div>
      <h1>Dashboard </h1>
      <h2>Name : {currentUser.displayName}</h2>
      <h2>Email : {currentUser.email}</h2>
      <button onClick={logOutUser}>Log out</button>
    </div>
  );
};

export default Dashboard;