// SSHConnection.js
import React, { useState } from 'react';

const SSHConnection = ({ onConnection }) => {
  const [sshCommand, setSshCommand] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('Desconectado');
  const [progress, setProgress] = useState(0);

  const handleSSHSubmit = () => {
    // Simulação de progresso e conexão bem-sucedida
    setProgress(30);
    setTimeout(() => {
      setConnectionStatus('Conectado');
      setProgress(100);
      onConnection(true);
    }, 3000);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Acesso ao Bare Metal</h2>
      <input
        type="text"
        className="input input-bordered w-full mb-4"
        placeholder="Insira o comando SSH"
        value={sshCommand}
        onChange={(e) => setSshCommand(e.target.value)}
      />
      <button className="btn btn-primary w-full mb-4" onClick={handleSSHSubmit}>
        Conectar
      </button>
      <p>Status: {connectionStatus}</p>
      <progress className="progress progress-primary w-full" value={progress} max="100"></progress>
    </div>
  );
};

export default SSHConnection;
