// src/Páginas/AIDocumentation.jsx
import React from 'react';

const AIDocumentation = () => {
  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-3xl mb-6">Documentação de Sistemas e Hardwares</h1>
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <h2 className="text-xl mb-2">Hardware de Rede</h2>
        <p>Roteadores, switches, antenas wireless e outros componentes de rede configurados automaticamente.</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <h2 className="text-xl mb-2">Sistemas Utilizados</h2>
        <p>O sistema operacional utilizado para bare-metal é o <strong>Ubuntu Pro</strong>, com automação de configuração via scripts CLI.</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <h2 className="text-xl mb-2">Provedores de Domínios e SSL</h2>
        <p>Configuração de automação usando provedores de domínio e SSL por meio de fluxos automatizados com <strong>8n8 open source</strong>.</p>
      </div>
    </div>
  );
};

export default AIDocumentation;
