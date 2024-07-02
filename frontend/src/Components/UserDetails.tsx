import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../services/api';

const UserDetails: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchUserDetails();
  }, [username]);

  const fetchUserDetails = async () => {
    const details = await getUserDetails(username);
    setUser(details);
  };

  // Vulnerable: Potential XSS
  return (
    <div>
      <h2>User Details</h2>
      {user && (
        <div dangerouslySetInnerHTML={{ __html: `
          <p>ID: ${user.id}</p>
          <p>Username: ${user.username}</p>
        `}} />
      )}
    </div>
  );
};

export default UserDetails;