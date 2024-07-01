import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './Modules/SplashScreen';
import GetStart from './Modules/GetStart';
import Login from './Modules/Registartion/Login';
import NewPassword from './Modules/Registartion/NewPassword';
import AccountDetails from './Modules/Registartion/AccountDetails';
import WelcomePage from './Modules/GetStart/WelcomePage';
import TabNavigation from './Navigation';
import Task from './Modules/Task';
import WorkDay from './Modules/WorkDay';
import DrivingLog from './Modules/DirivingLog';
import Tarcking from './Modules/Tracking';
import Registartion from './Modules/Registartion/Registration';

const Stack = createStackNavigator();

const App = () => {
  return (
  
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SPLASH_SCREEN" component={SplashScreen} />
        <Stack.Screen name="TAB" component={TabNavigation} />
        <Stack.Screen name="GET_START" component={GetStart} />
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="Registartion" component={Registartion} />
        <Stack.Screen name="TASK" component={Task} />
        <Stack.Screen name="WORK_DAY" component={WorkDay} />
        <Stack.Screen name="NEW_PASSWORD" component={NewPassword} />
        <Stack.Screen name="DRIVING_LOG" component={DrivingLog} />
        <Stack.Screen name="ACCOUTN_DETAILS" component={AccountDetails} />
        <Stack.Screen name="WELCOME_PAGE" component={WelcomePage} />
        <Stack.Screen name="TARCKING" component={Tarcking} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
