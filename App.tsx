import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import store from 'redux/stores';
import GlobalStyles from 'utils/styles';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import RootStack from 'navigation/RootStack';
import HomeScreen from 'screens/home/HomeScreen';
import { listImages } from 'utils/mockup_data';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: 'rgb(255, 45, 85)',
  },
};


export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadResources = async () => {
    await Promise.all([
      Font.loadAsync({
        'Chewy-Regular': require('./assets/font/Chewy-Regular.ttf'),
      }),
      Asset.loadAsync(listImages),
    ]);
    setIsReady(true);
  };

  useEffect(() => {
    loadResources();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider style={[styles.root, GlobalStyles.AndroidSafeArea]}>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer theme={MyTheme}>
            <SafeAreaView />
            <RootStack />
            <StatusBar style="auto" />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
  },
});
