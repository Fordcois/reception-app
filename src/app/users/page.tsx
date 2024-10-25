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

  const filteredUsers = searchCriteria.length <= 1
  ? users 
  : users.filter(user =>
      (user.first_name + ' ' + user.last_name).toUpperCase().includes(searchCriteria.toUpperCase())
    );



  return (
    <div className='page-container'>

      <div className='page-title-banner'>
        <h1>Search Staff</h1>
        <SearchBar searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria}/>
      </div>
      
    <div className='users-container'>
        {filteredUsers.map((user) => (
          <UserDisplay key={user.user_id} user={user} />
        ))}
      </div>
    </div>
  );
}