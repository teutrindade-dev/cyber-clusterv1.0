// src/pages/LoginWithFaceID.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TouchID from 'react-native-touch-id';

const LoginWithFaceID = ({ setAuth }) => {
  const [auth, setAuthState] = useState(false);
  const navigate = useNavigate();

  const authenticateWithFaceID = () => {
    const optionalConfigObject = {
      title: 'Autenticação por Face ID', // Título do prompt
      color: '#e00606', // Cor do prompt
    };

    TouchID.authenticate('Use Face ID para autenticação', optionalConfigObject)
      .then((success) => {
        setAuthState(true);
        setAuth(true);
        localStorage.setItem('authenticated', 'true');
        navigate('/'); // Redireciona para o Dashboard
      })
      .catch((error) => {
        alert('Autenticação falhou!');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl mb-6">Autenticação com Face ID</h1>
      <button className="btn btn-primary" onClick={authenticateWithFaceID}>
        Autenticar com Face ID
      </button>
    </div>
  );
};

export default LoginWithFaceID;
