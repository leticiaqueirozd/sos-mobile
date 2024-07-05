import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ReportScreen = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [reports, setReports] = useState([]);

  const handleSubmit = async () => {
    // Salvar a denúncia localmente (exemplo usando AsyncStorage)
    const newReport = { title, address, description };
    const updatedReports = [...reports, newReport];
    await AsyncStorage.setItem('reports', JSON.stringify(updatedReports));
    setReports(updatedReports);

    // Limpar campos do formulário após enviar
    setTitle('');
    setAddress('');
    setDescription('');
  };

  const loadReports = async () => {
    const savedReports = await AsyncStorage.getItem('reports');
    if (savedReports) {
      setReports(JSON.parse(savedReports));
    }
  };

  // Carregar os relatórios salvos ao carregar a tela
  React.useEffect(() => {
    loadReports();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Formulário de Denúncia</Text>

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Título da reclamação"
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Endereço completo"
        value={address}
        onChangeText={text => setAddress(text)}
      />

      <TextInput
        multiline
        style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Descrição do alerta"
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <Button
        title="Enviar"
        onPress={handleSubmit}
      />

      <Text style={{ fontSize: 20, marginTop: 20 }}>Histórico de Envios</Text>
      {reports.map((report, index) => (
        <View key={index} style={{ marginTop: 10, borderWidth: 1, padding: 10 }}>
          <Text><Text style={{ fontWeight: 'bold' }}>Título:</Text> {report.title}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>Endereço:</Text> {report.address}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>Descrição:</Text> {report.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
