import React from 'react';

const tablePageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start', 
  color: 'black',
  fontSize: 'small',
  padding: '20px',
  width: '100vw',
  height: '100vh', 
  overflow: 'hidden',
  boxSizing: 'border-box',
  backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/08/31/18/21/fantasy-3645269_1280.jpg")', 
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const tableStyle = {
  width: '80%', 
  borderCollapse: 'collapse',
  marginTop: 0, 
  marginBottom: '20px', 
  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
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
      <h1 style={{ marginTop: '0px', paddingTop: '0px' }}>Employee Details</h1>
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