// Training.js
import React, { useState } from 'react';

const Training = () => {
  const [frequency, setFrequency] = useState('Diário');
  const [scrapingSites, setScrapingSites] = useState('');
  const [contextAdjustments, setContextAdjustments] = useState('Normal');

  const handleSave = () => {
    // Enviar os dados para o backend (por exemplo)
    console.log({ frequency, scrapingSites, contextAdjustments });
  };

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-3xl mb-4">Configurações de Treinamento</h1>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <label className="block text-lg mb-2">Frequência de Treinamento</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="input input-bordered w-full"
        >
          <option value="Diário">Diário</option>
          <option value="Semanal">Semanal</option>
          <option value="Mensal">Mensal</option>
        </select>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <label className="block text-lg mb-2">Sites para Scraping de Dados</label>
        <input
          type="text"
          value={scrapingSites}
          onChange={(e) => setScrapingSites(e.target.value)}
          placeholder="URLs dos sites para scraping"
          className="input input-bordered w-full"
        />
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <label className="block text-lg mb-2">Ajustes de Contexto</label>
        <select
          value={contextAdjustments}
          onChange={(e) => setContextAdjustments(e.target.value)}
          className="input input-bordered w-full"
        >
          <option value="Normal">Normal</option>
          <option value="Avançado">Avançado</option>
          <option value="Personalizado">Personalizado</option>
        </select>
      </div>

      <button className="btn btn-primary w-full" onClick={handleSave}>
        Salvar Configurações
      </button>
    </div>
  );
};

export default Training;
