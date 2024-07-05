import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function DonationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça sua Doação</Text>
      <Text style={styles.description}>
        Cada gesto de solidariedade ilumina vidas e fortalece comunidades. Com a sua generosidade, podemos continuar a apoiar aqueles que mais precisam. Sua doação é uma luz de esperança que alcança corações e transforma realidades.
      </Text>
      <Text style={styles.pixLabel}>Chave PIX:</Text>
      <Text style={styles.pixKey}>XXXXXXXXXXX</Text>
      <View style={styles.qrCodeContainer}>
        <View style={styles.qrCode}></View>
      </View>
      <Text style={styles.thankYou}>Agradecemos do fundo do coração por seu apoio. Juntos, podemos construir um mundo melhor.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#11509D',
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  pixLabel: {
    fontSize: 18,
    marginBottom: 8,
    color: '#11509D',
  },
  pixKey: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#11509D',
  },
  qrCodeContainer: {
    marginBottom: 24,
  },
  qrCode: {
    width: 200,
    height: 200,
    backgroundColor: '#ccc', // Simulação de cor para o QR Code
  },
  thankYou: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default DonationScreen;
