import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export function ContactScreen() {
  const makeCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const contacts = [
    { name: 'Assistência Social', number: '155' },
    { name: 'Polícia Militar', number: '190' },
    { name: 'SAMU', number: '192' },
    { name: 'Bombeiros', number: '193' },
    { name: 'Polícia Civil', number: '197' },
    { name: 'Defesa Civil', number: '199' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Números de Emergência</Text>
      <View style={styles.grid}>
        {contacts.map((contact, index) => (
          <TouchableOpacity key={index} onPress={() => makeCall(contact.number)} style={styles.contact}>
            <View style={styles.innerContact}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactNumber}>{contact.number}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  contact: {
    width: '45%', // Adjust based on your preference
    aspectRatio: 1, // Square shape
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  innerContact: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  contactName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  contactNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#11509D',
  },
});

export default ContactScreen;
