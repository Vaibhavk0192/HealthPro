import React, { useEffect, useState } from 'react';
import "./home.css"
import axios from 'axios';
import UserLink from '../../components/userLink';

function LandingPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make a GET request to your Flask backend's API endpoint
    axios.get('/api/users')  // Update the URL as needed
      .then((response) => {
        setUsers(response.data); // Set the fetched user data in state
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
}

export const Home = () => {
  return (
    <div>
      <div>Home</div> 
      <div>
        {/* <UserLink /> */}
      </div>
    </div>
      
  )
}
