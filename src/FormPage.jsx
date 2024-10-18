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
  backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/08/31/18/21/fantasy-3645269_1280.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  overflow: 'hidden',
  boxSizing: 'border-box',
};

const containerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
  border: '1px solid rgba(255, 255, 255, 0.7)',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
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
  width: '100px',
};

const inputStyle = {
  padding: '10px',
  width: '300px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  flex: 1,
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

    // Check if any field is empty
    if (!name || !id || !phone || !gender) {
      alert("Please fill in all fields.");
      return;
    }

    // Check if phone number is exactly 10 digits
    if (phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    const formData = { name, id, phone, gender };
    onSubmitForm(formData);
  };

  return (
    <div style={formPageStyle}>
      <div style={containerStyle}>
        <h1>Employee Form</h1>
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
              type="tel" 
              pattern="[0-9]{10}"
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
                  onChange={(e) => setGender(e.target.value)}
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