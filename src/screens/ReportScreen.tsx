import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ReportScreen = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [reports, setReports] = useState([]);

  const handleSubmit = async () => {
    const newReport = { title, address, description };
    const updatedReports = [...reports, newReport];
    await AsyncStorage.setItem('reports', JSON.stringify(updatedReports));
    setReports(updatedReports);

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

  const clearReports = async () => {
    await AsyncStorage.removeItem('reports');
    setReports([]);
  };

  useEffect(() => {
    loadReports();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Formulário de Denúncia</Text>

      <TextInput
        style={styles.input}
        placeholder="Título da Reclamação"
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço Completo"
        value={address}
        onChangeText={text => setAddress(text)}
      />

      <TextInput
        multiline
        style={[styles.input, styles.textArea]}
        placeholder="Descrição do Alerta"
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Histórico de Envios</Text>
      {reports.map((report, index) => (
        <View key={index} style={styles.reportContainer}>
          <Text><Text style={styles.boldText}>Título:</Text> {report.title}</Text>
          <Text><Text style={styles.boldText}>Endereço:</Text> {report.address}</Text>
          <Text><Text style={styles.boldText}>Descrição:</Text> {report.description}</Text>
        </View>
      ))}

      {reports.length > 0 && (
        <TouchableOpacity
          onPress={clearReports}
          style={[styles.button, styles.clearButton]}
        >
          <Text style={styles.buttonText}>Limpar Histórico</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
  },
  heading: {
    marginTop: 30,
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#11509D',
    textAlign: 'center',
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
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Para alinhar o texto no topo da caixa de texto
  },
  button: {
    borderRadius: 10, // Bordas redondas no botão
    overflow: 'hidden', // Garante que as bordas redondas funcionem corretamente
    backgroundColor: '#11509D',
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  clearButton: {
    marginTop: 10,
    backgroundColor: '#11509D', // Cor vermelha para o botão de limpar
    paddingVertical: 15,
    paddingHorizontal: 60,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  reportContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ReportScreen;
