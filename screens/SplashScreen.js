import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Inicio');
    }, 2000); // Muda para a tela inicial após 2 segundos
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOS Inundação</Text>
      <ActivityIndicator size="large" color="#1E88E5" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#1E88E5',
  },
});
