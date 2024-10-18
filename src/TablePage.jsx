import React from 'react';

const tablePageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start', // Aligns the content to the top
  color: 'black',
  fontSize: 'large',
  padding: '20px',
  width: '100vw',
  height: '100vh', // Full height to center vertically
  overflow: 'hidden', // Remove scrolling option
  boxSizing: 'border-box',
  backgroundImage: 'url("https://www.hdwallpapers.in/download/green_leaves_in_blur_green_background_hd_nature-HD.jpg")', // Replace with your image URL
  backgroundSize: 'cover', // Ensure background covers the whole screen
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: 0, // Remove margin top
  marginBottom: '20px', // Add margin bottom for spacing
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for the table
};

const thStyle = {
  color: 'black',
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

function TablePage({ formData }) {
  return (
    <div style={tablePageStyle}>
      <h1 style={{ marginTop: '0px', paddingTop: '0px' }}>Employee Details</h1> {/* Ensure no margin/padding */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>{formData.name}</td>
            <td style={tdStyle}>{formData.id}</td>
            <td style={tdStyle}>{formData.phone}</td>
            <td style={tdStyle}>{formData.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;