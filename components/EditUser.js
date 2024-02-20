import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function EditUser() {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://api.example.com/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(`https://api.example.com/users/${id}`, user);
      history.push('/users');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <input type="text" placeholder="Name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
      <input type="email" placeholder="Email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
      <button onClick={updateUser}>Update</button>
    </div>
  );
}

export default EditUser;
