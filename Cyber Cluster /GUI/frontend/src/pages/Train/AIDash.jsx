// AIDash.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const trainingData = [
  { name: 'Leitura', volume: 300 },
  { name: 'Interpretação', volume: 400 },
  { name: 'Raciocínio', volume: 350 },
];

const AIDash = () => {
  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-3xl mb-4">Painel de Controle de Treinamento da IA</h1>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl font-bold mb-4">Volume de Parâmetros no Treinamento</h2>
        <LineChart width={600} height={300} data={trainingData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="volume" stroke="#8884d8" />
        </LineChart>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl font-bold mb-4">Dados de Processamento</h2>
        {/* Gráficos adicionais de tempo de aprendizado e runtime */}
      </div>
    </div>
  );
};

export default AIDash;
