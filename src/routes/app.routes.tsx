import React from 'react';
import { Header, createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import {InitialScreen} from '../screens/InitialScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {HomeScreen} from '../screens/HomeScreen';


export type RootStackParamList = {
    InitialScreen: undefined;
    LoginScreen: undefined;
    RegisterScreen: undefined;
    HomeScreen: undefined;
    EmergencyContactsScreen: undefined;
}

export function AppRoutes() {
  return(
    <Navigator screenOptions={{ header: (props) => <Header {...props} />}} >       
        <Screen name="Inicio" component={InitialScreen} options={{ headerShown: false }} />
        <Screen name="Login" component={LoginScreen}  />
        <Screen name = "Register" component={RegisterScreen}></Screen>
        <Screen name = "Home" component={HomeScreen} ></Screen>

    </Navigator>
  )
}