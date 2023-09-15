import React from 'react';
import { Link } from 'react-router-dom';

function UserLink({ user }) {
  return (
    <div className="user-card">
      <h3>{user.patientName}</h3>
      <p>{user.email}</p>
      <Link to={`/users/${user.id}`}>View Profile</Link>
    </div>
  );
}

export default UserLink;
