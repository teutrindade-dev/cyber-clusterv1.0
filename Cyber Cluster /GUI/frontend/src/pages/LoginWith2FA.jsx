// src/pages/LoginWith2FA.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginWith2FA = ({ setAuth }) => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerify2FA = async () => {
    try {
      const response = await axios.post('/api/auth/verify-2fa', { token: otp });
      if (response.data.message === 'Autenticação 2FA bem-sucedida') {
        setAuth(true);
        localStorage.setItem('authenticated', 'true');
        navigate('/'); // Redireciona para a Dashboard
      } else {
        alert('Código 2FA inválido');
      }
    } catch (error) {
      alert('Erro ao verificar o código 2FA');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl mb-6">Autenticação 2FA</h1>
      <input
        type="text"
        placeholder="Digite o código do Google Authenticator"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="input input-bordered w-full max-w-xs mb-4"
      />
      <button className="btn btn-primary w-full max-w-xs" onClick={handleVerify2FA}>
        Verificar Código 2FA
      </button>
    </div>
  );
};

export default LoginWith2FA;
