import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {
  const navigation = useNavigation();

  const [weatherData, setWeatherData] = useState<any>({});
  const [redAlerts, setRedAlerts] = useState<any[]>([]); // Estado para armazenar alertas vermelhos

  const fetchWeatherData = async () => {
    try {
      const response = await fetch('http://192.168.15.37:3001/weather/Boa%20Viagem');
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);

        // Verificar se há alerta vermelho e salvar localmente
        if (data.alert === 'Vermelho' || data.alert === 'Amarelo') {
          saveRedAlert('Boa Viagem', data); // Salvando localmente no aplicativo
        }
      } else {
        console.error('Erro ao buscar dados meteorológicos:', response.status);
      }
    } catch (error) {
      console.error('Erro ao buscar dados meteorológicos:', error);
    }
  };

  // Função para salvar alerta vermelho localmente
  const saveRedAlert = (location: string, details: any) => {
    const newAlert = { location, details, timestamp: new Date() };
    setRedAlerts(prevAlerts => [...prevAlerts, newAlert]);
  };

  useEffect(() => {
    // Buscar dados meteorológicos inicialmente
    fetchWeatherData();

    // Atualizar dados a cada minuto
    const interval = setInterval(fetchWeatherData, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.locationText}>
          Você está localizado em:
        </Text>
        <Text style={styles.location}>
          Recife, Pernambuco
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
          Histórico de Alertas
        </Text>
        <View style={styles.historyContainer}>
          {redAlerts.map((alert, index) => (
            <View key={index} style={[styles.alertItem, alert.details.alert === 'Vermelho' ? styles.redBackground : styles.yellowBackground]}>
              <Text style={styles.alertText}>
                {alert.details.alert === 'Vermelho' ? 'Alerta Vermelho' : 'Alerta Amarelo'}
              </Text>
              <Text style={styles.alertText}>
                Local: {alert.location}
              </Text>
              <Text style={styles.alertText}>
                Data e Hora: {alert.timestamp.toLocaleString()}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      {/* Barra de navegação no final da página */}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateToScreen('Home')}
        >
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateToScreen('Contact')}
        >
          <Text style={styles.navText}>Contatos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateToScreen('Report')}
        >
          <Text style={styles.navText}>Denúncia</Text>
        </TouchableOpacity>
      </View>
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
  alertItem: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  alertText: {
    fontSize: 16,
  },
  redBackground: {
    backgroundColor: '#ffa0a0', // Vermelho
  },
  yellowBackground: {
    backgroundColor: '#fffacd', // Amarelo
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
});

export default HomeScreen;
