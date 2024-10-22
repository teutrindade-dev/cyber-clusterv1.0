// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CyberSecurity from './pages/CyberSecurity';
import Domains from './pages/Domains';
import NetworkingSettings from './pages/NetworkingSettings';
import Login from './pages/Login'; // Página de login
import LoginWithFaceID from './pages/LoginWithFaceID'; // Login com Face ID
import NavMenu from './components/SideBar'; // Menu de navegação

// Função de verificação de autenticação (pode ser substituída por JWT ou outra)
const isAuthenticated = () => {
  return localStorage.getItem('authenticated') === 'true';
};

const App = () => {
  const [auth, setAuth] = useState(false);

  // Verifica o status de autenticação ao carregar o app
  useEffect(() => {
    setAuth(isAuthenticated());
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Mostrar o NavMenu apenas se o usuário estiver autenticado */}
        {auth && <NavMenu />}

        {/* Configuração das rotas */}
        <div className="p-4">
          <Routes>
            {/* Rota de login com senha e 2FA */}
            <Route path="/login" element={<Login setAuth={setAuth} />} />

            {/* Rota de login com Face ID */}
            <Route path="/login-face-id" element={<LoginWithFaceID setAuth={setAuth} />} />

            {/* Rotas protegidas */}
            {auth ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cybersecurity" element={<CyberSecurity />} />
                <Route path="/domains" element={<Domains />} />
                <Route path="/network-settings" element={<NetworkingSettings />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login-face-id" />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
