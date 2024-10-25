'use client'
import { useState, useEffect } from 'react';
import { getAllUsers } from "@/lib/api/getAllUsers";
import { UserDisplay } from "@/components/userDisplay";
import { UserType } from "@/types/User";
import { SearchBar } from '@/components/searchbar';

export default function UserRecords() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [searchCriteria, setSearchCriteria] = useState('');

  useEffect(() => {
    getAllUsers()
    .then(setUsers);
  }, []);

  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchCriteria.toLowerCase())
  );

  return (
    <div>
      <h1>User Records</h1>
      <SearchBar searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria}/>

      {filteredUsers.map((user) => (
        <UserDisplay key={user.user_id} user={user} />
      ))}
    </div>
  );
}