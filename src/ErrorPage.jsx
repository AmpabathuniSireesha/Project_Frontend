import React, { useState } from 'react';

const errorPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color:'red',
  fontSize: 'large',
  padding: '20px',
  width: '100vw',
  height: '100vh', // Full height to center vertically
  // backgroundColor: '#f7f7f7', // Light background for better contrast
  overflow: 'hidden', // Remove scrolling option
  boxSizing: 'border-box',
  backgroundColor: '#fdecea',
  // boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  width: '250px',
  fontSize: '14px',
  border: '1px solid #ccc', // Add border for better visibility
  borderRadius: '4px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '14px',
  backgroundColor: '#e74c3c',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

function ErrorPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div style={errorPageStyle}>
      <h1>Login Failed</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button style={buttonStyle} type="submit">
          Try Again
        </button>
      </form>
    </div>
  );
}

export default ErrorPage;
