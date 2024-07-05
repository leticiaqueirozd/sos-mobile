import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
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
  useEffect(() => {
    loadReports();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Formulário de Denúncia</Text>

      <TextInput
        style={styles.input}
        placeholder="Título da reclamação"
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço completo"
        value={address}
        onChangeText={text => setAddress(text)}
      />

      <TextInput
        multiline
        style={[styles.input, { height: 100 }]}
        placeholder="Descrição do alerta"
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <Button
        title="Enviar"
        onPress={handleSubmit}
        color="#11509D"
      />

      <Text style={styles.heading}>Histórico de Envios</Text>
      {reports.map((report, index) => (
        <View key={index} style={styles.reportContainer}>
          <Text><Text style={styles.boldText}>Título:</Text> {report.title}</Text>
          <Text><Text style={styles.boldText}>Endereço:</Text> {report.address}</Text>
          <Text><Text style={styles.boldText}>Descrição:</Text> {report.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#11509D',
  },
  input: {
    height: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
  reportContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
