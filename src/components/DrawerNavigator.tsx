import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { InitialScreen } from '../screens/InitialScreen';
import { HomeScreen } from '../screens/HomeScreen';
// import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Initial" component={InitialScreen} />
      {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
