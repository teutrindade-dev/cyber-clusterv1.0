// src/pages/Enable2FA.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Enable2FA = () => {
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');

  useEffect(() => {
    // Gerar QR Code e código secreto para o usuário
    axios.get('/api/auth/generate-2fa').then((response) => {
      setQrCode(response.data.qrCode);
      setSecret(response.data.secret);
    });
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-2xl mb-4">Configurar Autenticação 2FA</h1>
      {qrCode ? (
        <>
          <p>Escaneie este QR code com o Google Authenticator:</p>
          <img src={qrCode} alt="QR Code para 2FA" />
        </>
      ) : (
        <p>Carregando QR Code...</p>
      )}
      <p>Seu código secreto é: {secret}</p>
    </div>
  );
};

export default Enable2FA;
