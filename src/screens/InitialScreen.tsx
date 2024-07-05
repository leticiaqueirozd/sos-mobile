import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Frase maior */}
      <Text style={styles.bigText}>Inundações previstas, vidas protegidas.</Text>
      {/* Frase menor */}
      <Text style={styles.smallText}>Sua comunidade protegida através de alertas rápidos e eficazes.</Text>
      
      {/* Logo */}
      {/* <Image source={logo} style={styles.logo} /> */}

      {/* Botão Entrar */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão Criar nova conta */}
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
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  bigText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#11509D',
  },
  smallText: {
    fontSize: 16,
    width: '75%',
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },

  button: {
    backgroundColor: '#11509D',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  buttonOutline: {
    borderColor: '#11509D',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 85,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutlineText: {
    color: '#11509D',
    fontSize: 16,
  },
});
