import { View, Text, TouchableOpacity, Linking } from 'react-native';

export const ContactScreen = () => {
  const makeCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const contacts = [
    { name: 'Defesa Civil', number: '199' },
    { name: 'Assistência Social', number: '155' },
    { name: 'Polícia Civil', number: '197' },
    { name: 'Polícia Militar', number: '190' },
  ];

  return (
    <View>
      {contacts.map((contact, index) => (
        <TouchableOpacity key={index} onPress={() => makeCall(contact.number)}>
          <View>
            <Text>{contact.name}</Text>
            <Text>{contact.number}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ContactScreen;
