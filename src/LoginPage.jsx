import React, { useState } from 'react';

const loginPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // Center vertically and horizontally
  padding: '20px',
  width: '100vw',
  height: '100vh', // Full viewport height
  backgroundImage: 'url("https://www.hdwallpapers.in/download/green_leaves_in_blur_green_background_hd_nature-HD.jpg")',
  backgroundSize: 'cover', // Ensure background covers the whole screen
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed', // Fixed background during scroll
  color: '#fff', // Light font color for contrast
  textShadow: '0px 2px 4px rgba(0, 0, 0, 0.6)', // Text shadow for better readability
  overflow: 'hidden', // Prevent scrolling
  boxSizing: 'border-box', // Ensures content fits within the box
};

const inputStyle = {
  margin: '10px 0',
  padding: '12px',
  width: '260px',
  fontSize: '16px',
  border: '1px solid #fff', // Light border
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
  color: '#333',
};

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '16px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Slight shadow for depth
  transition: 'background-color 0.3s, transform 0.2s', // Smooth transition effects
};

const buttonHoverStyle = {
  backgroundColor: 'green',
  transform: 'scale(1.05)', // Slight zoom on hover
};

const headingStyle = {
  color: 'black',
  marginBottom: '20px',
  fontSize: '32px',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for readability
};

const passwordContainerStyle = {
  position: 'relative',
  width: '260px', // Match the width of the input
};

const eyeIconStyle = {
  position: 'absolute',
  right: '2px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  color: '#333', // Dark color for the icon
};

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div style={loginPageStyle}>
      <h1 style={headingStyle}>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <div style={passwordContainerStyle}>
          <input
            style={inputStyle}
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span 
            style={eyeIconStyle} 
            onClick={togglePasswordVisibility}
            title={isPasswordVisible ? 'Hide password' : 'Show password'}
          >
            {isPasswordVisible ? '👁️' : '👁️‍🗨️'} {/* Eye icon for visibility toggle */}
          </span>
        </div>
        <br />
        <button
          style={buttonStyle}
          type="submit"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          onMouseDown={(e) => e.currentTarget.style.transform = buttonHoverStyle.transform}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;