// src/Páginas/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, verify2FA } from '../services/authService'; // Serviços de autenticação

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1); // 1: Login, 2: 2FA
  const [authCode, setAuthCode] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await loginUser({ username, password });
    if (success) {
      setStep(2); // Ir para etapa 2FA
    } else {
      alert('Login falhou. Verifique suas credenciais.');
    }
  };

  const handle2FAVerification = async () => {
    const success = await verify2FA({ code: authCode });
    if (success) {
      navigate('/home'); // Redirecionar para o Home
    } else {
      alert('Código de autenticação inválido.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-6 text-center">{step === 1 ? 'Login' : 'Verificação 2FA'}</h1>

        {step === 1 ? (
          <>
            <input
              type="text"
              placeholder="Nome de Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered w-full mb-4"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full mb-6"
            />
            <button className="btn btn-primary w-full" onClick={handleLogin}>
              Entrar
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Código de Autenticação"
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
              className="input input-bordered w-full mb-4"
            />
            <button className="btn btn-primary w-full" onClick={handle2FAVerification}>
              Verificar Código
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
