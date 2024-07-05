import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao SOS Inundação</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonOutlineText}>Criar nova conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  buttonOutline: {
    borderColor: '#1E88E5',
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonOutlineText: {
    color: '#1E88E5',
    fontSize: 16,
  },
});
   
