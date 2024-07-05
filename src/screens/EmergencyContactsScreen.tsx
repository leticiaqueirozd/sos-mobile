import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function EmergencyContactsScreen() {
  const contacts = [
    { name: 'Defesa Civil', phone: '199' },
    { name: 'Bombeiros', phone: '193' },
    { name: 'SAMU', phone: '192' },
    { name: 'Polícia Federal', phone: '194' },
    { name: 'Assistência Social', phone: '123' },
  ];

  const makeCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <View style={styles.container}>
      {contacts.map((contact, index) => (
        <TouchableOpacity key={index} style={styles.contactButton} onPress={() => makeCall(contact.phone)}>
          <Text style={styles.contactText}>{contact.name}: {contact.phone}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  contactButton: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
  },
  contactText: {
    fontSize: 18,
  },
});
