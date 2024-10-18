import React, { useState } from 'react';

const formPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  fontSize: 'small',
  padding: '20px',
  width: '100vw',
  height: '100vh',
  backgroundImage: 'url("https://www.hdwallpapers.in/download/green_leaves_in_blur_green_background_hd_nature-HD.jpg")', // Replace with your image URL
  backgroundSize: 'cover', // Ensure background covers the whole screen
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed', // Fixed background during scroll
  overflow: 'hidden',
  boxSizing: 'border-box',
};

const formContainerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white for better contrast
  border: '1px solid rgba(255, 255, 255, 0.7)', // Light border for visibility
  borderRadius: '8px', // Rounded corners
  padding: '20px', // Padding inside the box
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '400px', // Set a fixed width for better alignment
};

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '10px 0',
};

const labelStyle = {
  marginRight: '10px',
  fontWeight: 'bold',
  fontSize: '14px',
  color: '#333',
  width: '100px', // Set a fixed width for labels
};

const inputStyle = {
  padding: '10px',
  width: '300px', // Increased width for input fields
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  flex: 1, // Take the remaining space
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '14px',
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  marginTop: '10px',
};

function FormPage({ onSubmitForm }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, id, phone, gender };
    onSubmitForm(formData);
  };

  return (
    <div style={formPageStyle}>
      <h1>Employee Form</h1>
      <div style={formContainerStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Name:</label>
            <input
              style={inputStyle}
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>ID:</label>
            <input
              style={inputStyle}
              type="text"
              placeholder="Enter your ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Phone:</label>
            <input
              style={inputStyle}
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Gender:</label>
            <div style={{ display: 'flex', flex: 1 }}>
              <label style={{ marginRight: '10px' }}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={( e) => setGender(e.target.value)}
                /> Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                /> Male
              </label>
            </div>
          </div>
          <button style={buttonStyle} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;