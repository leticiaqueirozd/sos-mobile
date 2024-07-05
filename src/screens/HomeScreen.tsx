import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export function HomeScreen() {


  const [weatherData, setWeatherData] = useState<any>({});

  const fetchWeatherData = async () => {
    try {
      const response = await fetch('http://192.168.15.37:3001/weather/Boa%20Viagem');
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error('Erro ao buscar dados meteorológicos:', response.status);
      }
    } catch (error) {
      console.error('Erro ao buscar dados meteorológicos:', error);
    }
  };

  useEffect(() => {
    // Buscar dados meteorológicos inicialmente
    fetchWeatherData();

    // Atualizar dados a cada minuto
    const interval = setInterval(fetchWeatherData, 60 * 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.locationText}>
          Você está localizado em:
        </Text>
        <Text style={styles.location}>
          Recife, Pernembuco
        </Text>
        <Text style={styles.currentTempText}>
          Temperatura Atual
        </Text>
        <Text style={styles.currentTemp}>
          {weatherData.temperature}°C
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Umidade: {weatherData.humidity}%
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Precipitação: {weatherData.precipitation}mm
            </Text>
          </View>
        </View>
        <Text style={styles.historyTitle}>
          Histórico de Alertas Vermelhos
        </Text>
        <View style={styles.historyContainer}>
          <Text style={styles.historyText}>Alerta 1: Data e hora</Text>
          <Text style={styles.historyText}>Alerta 2: Data e hora</Text>
          {/* Adicione mais alertas conforme necessário */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100, // Add space for the navbar
  },
  locationText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 18,
    marginBottom: 20,
  },
  currentTempText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  currentTemp: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoBox: {
    width: '48%',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  historyText: {
    fontSize: 16,
    marginBottom: 5,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
  },
  navTextSelected: {
    fontWeight: 'bold',
    color: 'blue',
  },
});
