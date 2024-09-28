import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreenComponent from './Modules/SplashScreen';
import GetStart from './Modules/GetStart';
import Login from './Modules/Registartion/Login';
import NewPassword from './Modules/Registartion/NewPassword';
import AccountDetails from './Modules/Registartion/AccountDetails';
import WelcomePage from './Modules/GetStart/WelcomePage';
import TabNavigation from './Navigation';
import Task from './Modules/Task';
import WorkDay from './Modules/WorkDay';
import DrivingLog from './Modules/DirivingLog';
import Tracking from './Modules/Tracking';
import Registration from './Modules/Registartion/Registration';
import Tarcking from './Modules/Tracking';

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),

  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'SPLASH_SCREEN'} screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="SPLASH_SCREEN" component={SplashScreenComponent} />
          <Stack.Screen name="GET_START" component={GetStart} />
          <Stack.Screen name="LOGIN" component={Login} />
          <Stack.Screen name="TAB" component={TabNavigation} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="TASK" component={Task} />
          <Stack.Screen name="WORK_DAY" component={WorkDay} />
          <Stack.Screen name="NEW_PASSWORD" component={NewPassword} />
          <Stack.Screen name="DRIVING_LOG" component={DrivingLog} />
          <Stack.Screen name="ACCOUNT_DETAILS" component={AccountDetails} />
          <Stack.Screen name="WELCOME_PAGE" component={WelcomePage} />
          <Stack.Screen name="Tarcking" component={Tarcking} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
