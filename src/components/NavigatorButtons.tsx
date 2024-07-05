import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function NavigationButtons ({ navigation})  {

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Button title="Screen 1" onPress={() => navigateToScreen('Inicio')} />
      <Button title="Screen 2" onPress={() => navigateToScreen('Login')} />
      <Button title="Screen 3" onPress={() => navigateToScreen('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'lightgray',
  },
});

export default NavigationButtons;
