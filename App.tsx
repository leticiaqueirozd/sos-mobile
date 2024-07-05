import React, { useCallback, useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, Vibration } from 'react-native';

import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import * as Notifications from 'expo-notifications';


import { Routes } from './src/routes';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {

  const [weatherData, setWeatherData] = useState<any>({});

  const fetchWeatherData = async () => {
    try {
      const response = await fetch('http://10.100.1.85:3001/weather/Boa%20Viagem');
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        // Verificar o alerta e exibir notificação se necessário
        if (data.alert === 'Amarelo' || data.alert === 'Vermelho') {
          scheduleNotification(data);
        }
      } else {
        console.error('Erro ao buscar dados meteorológicos:', response.status);
      }
    } catch (error) {
      console.error('Erro ao buscar dados meteorológicos:', error);
    }
  };

  const scheduleNotification = async (data: any) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Alerta Meteorológico',
        body: `Bairro: Boa Viagem\nTemperatura: ${data.temperature} °C\nUmidade: ${data.humidity} %\nPrecipitação: ${data.precipitation} mm\nAlerta: ${data.alert}`,
        sound: true,
      },
      trigger: null, // Imediatamente
    });
  };

  useEffect(() => {
    // Buscar dados meteorológicos inicialmente
    fetchWeatherData();

    // Atualizar dados a cada minuto
    const interval = setInterval(fetchWeatherData, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const [fontsLoaded] = Font.useFonts({
    Inter_400Regular,
    Inter_500Medium,
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes onReady={onLayoutRootView} />
  );
}