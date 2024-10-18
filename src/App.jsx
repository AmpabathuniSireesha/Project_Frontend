import React, { useState } from 'react';
import LoginPage from './LoginPage';
import FormPage from './FormPage';
import TablePage from './TablePage';
import ErrorPage from './ErrorPage';

const appStyle = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleLogin = (username, password) => {
    if (username === 'Sireesha' && password === 'siri@123') {
      setIsLoggedIn(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleSubmitForm = (data) => {
    setFormData(data);
  };

  return (
    <div style={appStyle}>
      {!isLoggedIn
        ? loginError
          ? <ErrorPage onLogin={handleLogin} />
          : <LoginPage onLogin={handleLogin} />
        : formData
        ? <TablePage formData={formData} />
        : <FormPage onSubmitForm={handleSubmitForm} />
      }
    </div>
  );
}

export default App;
