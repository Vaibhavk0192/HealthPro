import React, { useEffect, useState } from 'react';
import "./home.css"
import axios from 'axios';
import UserLink from '../../components/userLink';

function LandingPage() {
  const [users, setUsers] = useState([]);

 
  useEffect(() => {
    // GET request to Flask API endpoint
    axios.get('/api/users')  // Update the URL as needed
      .then((response) => {
        setUsers(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
}

export const Home = () => {

  const user = {
    id: 1,
    patientName: 'John Doe',
    email: 'johndoe@example.com',
  };



  return (
    <div>
      <div>Home</div> 
      <div>
      <UserLink user={user} />
      </div>
    </div>
      
  )
}
