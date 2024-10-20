import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import Loader from '@/components/common/Loader';

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'poppins': require('../assets/fonts/Poppins-Regular.ttf'),
      'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
      'poppins-light': require('../assets/fonts/Poppins-Light.ttf'),
      'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
      'poppins-thin': require('../assets/fonts/Poppins-Thin.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="(tabs)"/>
    </Stack>
  );
}
