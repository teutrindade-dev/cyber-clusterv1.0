// backend-UI/controllers/networkController.js

// Exemplo de dados de configuração de rede
const getNetworkConfig = (req, res) => {
  const config = {
    ethernet: { speed: '1000Mbps', bandwidth: '100MB', latency: '10ms' },
    wireless: { protocol: '802.11ac' },
    bluetooth: { version: '5.0' },
    ipMask: '255.255.255.0',
    vpn: 'Active',
  };
  res.json(config);
};

// Exemplo de dados de tráfego Ethernet
const getEthernetTraffic = (req, res) => {
  const trafficData = [
    { time: '08:00', traffic: 120 },
    { time: '09:00', traffic: 200 },
    { time: '10:00', traffic: 150 },
    { time: '11:00', traffic: 180 },
  ];
  res.json(trafficData);
};

// Exemplo de dados de interações de Wireless e Bluetooth
const getInteractionsData = (req, res) => {
  const bubbleData = [
    { name: 'Wireless', value: 300 },
    { name: 'Bluetooth', value: 100 },
  ];
  res.json(bubbleData);
};

module.exports = { getNetworkConfig, getEthernetTraffic, getInteractionsData };
