import React from 'react';
import { Header, createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();


import {SplashScreen} from '../screens/SplashScreen';
import {InitialScreen} from '../screens/InitialScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {HomeScreen} from '../screens/HomeScreen';

export type RootStackParamList = {
    SignIn: undefined;
    Home: undefined;
    EstablishmentDetails: undefined;
    EventDetails: undefined;
    MyEvents: undefined;
}

export function AppRoutes() {
  return(
    <Navigator screenOptions={{ header: (props) => <Header {...props} />}} >       
        <Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
        <Screen name="Inicio" component={InitialScreen}  />
        <Screen name="Login" component={LoginScreen}  />
        <Screen name = "Register" component={RegisterScreen}></Screen>
        <Screen name = "Home" component={HomeScreen} ></Screen>

    </Navigator>
  )
}