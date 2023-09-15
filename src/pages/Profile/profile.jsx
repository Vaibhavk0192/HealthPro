import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile({ match }) {
  const [userProfile, setUserProfile] = useState({});
  const userId = match.params.userId; 

  useEffect(() => {
    axios.get(`/api/user/${userId}`) 
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, [userId]);

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>User Name:</strong> {userProfile.patientName}</p>
      <p><strong>Date of Birth:</strong> {userProfile.dob}</p>
      <p><strong>Gender:</strong> {userProfile.gender}</p>
      <p><strong>Phone Number:</strong> {userProfile.phoneNo}</p>
      <p><strong>Email:</strong> {userProfile.email}</p>
      {/* Add more profile details as needed */}
    </div>
  );
}

export default Profile;


