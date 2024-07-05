import React from 'react';
import { Header, createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import {InitialScreen} from '../screens/InitialScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {HomeScreen} from '../screens/HomeScreen';
// import {EmergencyContactsScreen} from '../screens/EmergencyContactsScreen';
import {ContactScreen} from '../screens/ContactScreen';
import {ReportScreen} from '../screens/ReportScreen';


export type RootStackParamList = {
    InitialScreen: undefined;
    LoginScreen: undefined;
    RegisterScreen: undefined;
    HomeScreen: undefined;
    ContactScreen: undefined;
    ReportScreen: undefined;  

}

export function AppRoutes() {
  return(
    <Navigator screenOptions={{ header: (props) => <Header {...props} />}} >       
        <Screen name="Inicio" component={InitialScreen} options={{ headerShown: false }} />
        <Screen name="Login" component={LoginScreen}  />
        <Screen name = "Register" component={RegisterScreen}></Screen>
        <Screen name = "Home" component={HomeScreen} ></Screen>
        <Screen name = "Contact" component={ContactScreen} ></Screen>
        <Screen name = "Report" component={ReportScreen} ></Screen>
    </Navigator>
  )
}