import React, { useCallback, useEffect } from 'react';

import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Routes } from './src/routes';

export default function App() {

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
