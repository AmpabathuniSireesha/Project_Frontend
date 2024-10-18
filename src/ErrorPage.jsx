import React, { useState } from 'react';

const errorPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // Centering the content vertically
  color: 'red',
  fontSize: 'large',
  padding: '20px',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  boxSizing: 'border-box',
  backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/08/31/18/21/fantasy-3645269_1280.jpg")', // Background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const containerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  width: '250px',
  fontSize: '14px',
  border: '1px solid #ccc',
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
      <div style={containerStyle}>
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
    </div>
  );
}

export default ErrorPage;