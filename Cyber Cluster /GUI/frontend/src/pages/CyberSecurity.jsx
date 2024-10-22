// CyberSecurity.js
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CyberSecurity = () => {
  const [securityLogs, setSecurityLogs] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Carregar os logs de segurança e alertas
    fetch("/api/security-logs")
      .then((response) => response.json())
      .then((data) => {
        setSecurityLogs(data.logs);
        setAlerts(data.alerts);
      });
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-3xl mb-4">Segurança Cibernética</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* Invasion Monitoring */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Monitoramento de Invasões</h2>
          <LineChart width={600} height={300} data={securityLogs}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="invasions" stroke="#ff4500" />
          </LineChart>
        </div>

        {/* Alerts */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Alertas e Ações</h2>
          <ul>
            {alerts.map((alert, index) => (
              <li key={index}>{alert.message}</li>
            ))}
          </ul>
        </div>

        {/* Firewall and Antivirus Monitoring */}
        <div className="col-span-2 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Firewall e Antivírus</h2>
          {/* Coloque aqui informações do Firewall e Antivírus */}
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
