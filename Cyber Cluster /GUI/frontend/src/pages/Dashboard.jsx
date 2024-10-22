import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc'; // TailwindCSS for React Native
import axios from 'axios';

const Dashboard = () => {
  const [networkData, setNetworkData] = useState([]);
  const [securityStatus, setSecurityStatus] = useState({});
  const [domainStatus, setDomainStatus] = useState([]);

  useEffect(() => {
    // Fetch network data
    axios.get('/api/network/config')
      .then(response => setNetworkData(response.data))
      .catch(error => console.error('Error fetching network data:', error));

    // Fetch security status
    axios.get('/api/security/status')
      .then(response => setSecurityStatus(response.data))
      .catch(error => console.error('Error fetching security status:', error));

    // Fetch domain status
    axios.get('/api/domains/ping')
      .then(response => setDomainStatus(response.data))
      .catch(error => console.error('Error fetching domain status:', error));
  }, []);

  return (
    <ScrollView style={tw`p-4`}>
      <View style={tw`mb-4`}>
        <Text style={tw`text-xl font-bold`}>Network Configuration</Text>
        {networkData.map((item, index) => (
          <View key={index} style={tw`p-2 bg-gray-100 rounded-lg mb-2`}>
            <Text>Speed: {item.speed}</Text>
            <Text>Bandwidth: {item.bandwidth}</Text>
            <Text>Latency: {item.latency}</Text>
          </View>
        ))}
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`text-xl font-bold`}>Security Status</Text>
        <View style={tw`p-2 bg-gray-100 rounded-lg`}>
          <Text>Firewall: {securityStatus.firewall}</Text>
          <Text>Antivirus: {securityStatus.antivirus}</Text>
          <Text>Active Threats: {securityStatus.activeThreats}</Text>
        </View>
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`text-xl font-bold`}>Domain Status</Text>
        {domainStatus.map((domain, index) => (
          <View key={index} style={tw`p-2 bg-gray-100 rounded-lg mb-2`}>
            <Text>Domain: {domain.name}</Text>
            <Text>Status: {domain.status}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Dashboard;