import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BubbleChart, Bubble } from 'recharts';

const NetworkSettings = () => {
  // Estado para configurações de rede carregadas dinamicamente
  const [ethernetConfig, setEthernetConfig] = useState({
    speed: '',
    bandwidth: '',
    latency: '',
  });
  const [wirelessConfig, setWirelessConfig] = useState({ protocol: '' });
  const [bluetoothConfig, setBluetoothConfig] = useState({ version: '' });
  const [ipMask, setIpMask] = useState('');
  const [vpn, setVpn] = useState('');
  const [trafficData, setTrafficData] = useState([]);
  const [bubbleData, setBubbleData] = useState([]);

  // Função para buscar configurações do backend
  const fetchNetworkConfig = async () => {
    try {
      const response = await fetch('/api/network/config');
      const configData = await response.json();
      setEthernetConfig(configData.ethernet);
      setWirelessConfig(configData.wireless);
      setBluetoothConfig(configData.bluetooth);
      setIpMask(configData.ipMask);
      setVpn(configData.vpn);
    } catch (error) {
      console.error('Erro ao carregar configurações de rede:', error);
    }
  };

  // Função para buscar dados de tráfego e interação para os gráficos
  const fetchChartData = async () => {
    try {
      const trafficResponse = await fetch('/api/network/traffic');
      const traffic = await trafficResponse.json();
      setTrafficData(traffic);

      const bubbleResponse = await fetch('/api/network/interactions');
      const bubble = await bubbleResponse.json();
      setBubbleData(bubble);
    } catch (error) {
      console.error('Erro ao carregar dados dos gráficos:', error);
    }
  };

  // useEffect para carregar os dados iniciais
  useEffect(() => {
    fetchNetworkConfig();
    fetchChartData();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-3xl mb-6">Configurações de Rede</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Ethernet Configuration */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Configuração Ethernet</h2>
          <p><strong>Velocidade:</strong> {ethernetConfig.speed || 'Carregando...'}</p>
          <p><strong>Largura de Banda:</strong> {ethernetConfig.bandwidth || 'Carregando...'}</p>
          <p><strong>Latência:</strong> {ethernetConfig.latency || 'Carregando...'}</p>
        </div>

        {/* Wireless Configuration */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Configuração Wireless</h2>
          <p><strong>Protocolo:</strong> {wirelessConfig.protocol || 'Carregando...'}</p>
        </div>

        {/* Bluetooth Configuration */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Configuração Bluetooth</h2>
          <p><strong>Versão:</strong> {bluetoothConfig.version || 'Carregando...'}</p>
        </div>

        {/* IP Mask and VPN */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Configuração Padrão</h2>
          <p><strong>Máscara de IP:</strong> {ipMask || 'Carregando...'}</p>
          <p><strong>VPN:</strong> {vpn || 'Carregando...'}</p>
        </div>

        {/* Ethernet Traffic Chart */}
        <div className="col-span-2 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Tráfego Ethernet</h2>
          <LineChart width={600} height={300} data={trafficData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="traffic" stroke="#8884d8" />
          </LineChart>
        </div>

        {/* Bubble Chart for Wireless and Bluetooth */}
        <div className="col-span-2 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Interações Wireless e Bluetooth</h2>
          <BubbleChart width={600} height={300} data={bubbleData}>
            <Bubble dataKey="value" fill="#8884d8" />
          </BubbleChart>
        </div>
      </div>
    </div>
  );
};

export default NetworkSettings;
