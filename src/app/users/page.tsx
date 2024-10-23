'use client';
import { useEffect, useState } from 'react';

export default function UserRecords() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserRecords = async () => {
      try {
        const response = await fetch('/api/userrecords');
        if (!response.ok) {
          throw new Error('Failed to fetch user records');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUserRecords();
  }, []);

  return (
    <div>
      <h1>User Records</h1>
      <ul>
        { (users.map((user, index) => 
        (<li key={index}>{user.first_name}</li>)
        ))}
      </ul>
    </div>
  );
}
