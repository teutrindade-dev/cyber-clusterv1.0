// Domains.js
import React, { useState } from 'react';

const Domains = () => {
  const [domain, setDomain] = useState('');
  const [dnsConfig, setDnsConfig] = useState([]);

  const handleAddDomain = () => {
    // Lógica para adicionar domínios
    setDnsConfig([...dnsConfig, domain]);
    setDomain('');
  };

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-3xl mb-4">Gerenciamento de Domínios e DNS</h1>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <label className="block text-lg mb-2">Adicionar Domínio</label>
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Insira o domínio"
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary mt-4" onClick={handleAddDomain}>
          Adicionar Domínio
        </button>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Configurações DNS</h2>
        <ul>
          {dnsConfig.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
      </div>

      {/* Área de monitoramento de Ping e Propagação */}
    </div>
  );
};

export default Domains;
