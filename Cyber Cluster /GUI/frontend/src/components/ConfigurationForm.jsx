// ConfigurationForm.js
import React, { useState } from 'react';

const ConfigurationForm = ({ type, onSubmit }) => {
  const [vmsConfig, setVmsConfig] = useState({ ram: 0, disk: 0, cpu: 0 });
  const [vpsConfig, setVpsConfig] = useState({ ssd: 0, aapanelUsers: 0 });

  const handleSubmit = () => {
    if (type === 'VM') {
      onSubmit(vmsConfig);
    } else if (type === 'VPS') {
      onSubmit(vpsConfig);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Configurações do {type}</h2>
      {type === 'VM' && (
        <div>
          <input
            type="number"
            className="input input-bordered w-full mb-4"
            placeholder="Memória RAM (GB)"
            onChange={(e) => setVmsConfig({ ...vmsConfig, ram: e.target.value })}
          />
          <input
            type="number"
            className="input input-bordered w-full mb-4"
            placeholder="Disco (GB)"
            onChange={(e) => setVmsConfig({ ...vmsConfig, disk: e.target.value })}
          />
          <input
            type="number"
            className="input input-bordered w-full mb-4"
            placeholder="Processadores"
            onChange={(e) => setVmsConfig({ ...vmsConfig, cpu: e.target.value })}
          />
        </div>
      )}
      {type === 'VPS' && (
        <div>
          <input
            type="number"
            className="input input-bordered w-full mb-4"
            placeholder="SSD Total (GB)"
            onChange={(e) => setVpsConfig({ ...vpsConfig, ssd: e.target.value })}
          />
          <input
            type="number"
            className="input input-bordered w-full mb-4"
            placeholder="Número de Usuários aaPanel"
            onChange={(e) => setVpsConfig({ ...vpsConfig, aapanelUsers: e.target.value })}
          />
        </div>
      )}
      <button className="btn btn-primary w-full" onClick={handleSubmit}>
        Confirmar Configuração
      </button>
    </div>
  );
};

export default ConfigurationForm;
