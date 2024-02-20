import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { setAuthState } = useContext(AuthContext);
  const history = useHistory();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = () => {
    // Your login logic here
    // Upon successful login, set authentication state and redirect to user list
    setAuthState({
      isAuthenticated: true,
      user: { email: credentials.email },
      token: 'sample_token' // Replace with actual token received from backend
    });
    history.push('/users');
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={credentials.email} onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
      <input type="password" placeholder="Password" value={credentials.password} onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;