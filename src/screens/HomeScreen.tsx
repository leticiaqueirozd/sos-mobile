import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../routes/app.routes';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = NavigationProp<RootStackParamList>;

export function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [selectedTab, setSelectedTab] = useState('Contatos');

  const handleNavPress = (tab: string) => {
    setSelectedTab(tab);
    // Navegue para a tela correspondente, se necessário
    // Exemplo:
    // if (tab === 'Alertas') {
    //   navigation.navigate('AlertasScreen');
    // }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.locationText}>
          Você está localizado em:
        </Text>
        <Text style={styles.location}>
          Cidade, Estado
        </Text>
        <Text style={styles.currentTempText}>
          Temperatura Atual
        </Text>
        <Text style={styles.currentTemp}>
          25°C
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Umidade: 80%
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Precipitação: 10mm
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
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton} onPress={() => handleNavPress('Alertas')}>
          <Text style={[styles.navText, selectedTab === 'Alertas' && styles.navTextSelected]}>Alertas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => handleNavPress('Contatos')}>
          <Text style={[styles.navText, selectedTab === 'Contatos' && styles.navTextSelected]}>Contatos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => handleNavPress('Ajustes')}>
          <Text style={[styles.navText, selectedTab === 'Ajustes' && styles.navTextSelected]}>Ajustes</Text>
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
