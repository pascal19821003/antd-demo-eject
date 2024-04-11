import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UserList() {
    const [users, setUsers] = useState<any[]>([]);
  
    useEffect(() => {
      async function fetchUsers() {
        try {
          const response = await axios.get('/api/users');
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
  
      fetchUsers();
    }, []);
  
    return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default UserList;
  
