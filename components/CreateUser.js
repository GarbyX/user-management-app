import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function CreateUser() {
  const history = useHistory();
  const [user, setUser] = useState({ name: '', email: '' });

  const createUser = async () => {
    try {
      await axios.post('https://api.example.com/users', user);
      history.push('/users');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <input type="text" placeholder="Name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
      <input type="email" placeholder="Email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
      <button onClick={createUser}>Create</button>
    </div>
  );
}

export default CreateUser;
