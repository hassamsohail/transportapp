import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Modules/Home';
import IconI from 'react-native-vector-icons/Ionicons';
import IconO from 'react-native-vector-icons/Octicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import DrivingLogs from '../Modules/DrivingLogsMain';
import {useNavigation} from '@react-navigation/native';
import Setting from '../Modules/Setting';
import Account from '../Modules/Account';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  const navigaton = useNavigation();
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: 'home',
      route: 'HOME',
    },
    {
      id: 2,
      name: 'file-clock',
      route: 'LOGS',
    },
    {
      id: 3,
      name: 'settings',
      route:"SETTINGS"
    },
    {
      id: 4,
      name: 'user',
      route:"ACCOUNT"
    },
  ]);
  const [initialTab, setInitialTab] = useState(1);
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          height: 80,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          position: 'absolute',
          bottom: 0,
          elevation: 5,
          zIndex: 2,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        {tabs.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigaton.navigate(item.route);
                setInitialTab(item.id);
              }}>
              {item.id == 1 ? (
                <IconI
                  name={item.name}
                  size={25}
                  color={item.id == initialTab ? '#F07F21' : '#A7A7A7'}
                />
              ) : item.id == 2 ? (
                <IconM
                  name={item.name}
                  size={25}
                  color={item.id == initialTab ? '#F07F21' : '#A7A7A7'}
                />
              ) : item.id==3?(
                <IconI
                  name={item.name}
                  size={25}
                  color={item.id == initialTab ? '#F07F21' : '#A7A7A7'}
                />
              ):(
                <IconF
                  name={item.name}
                  size={25}
                  color={item.id == initialTab ? '#F07F21' : '#A7A7A7'}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <Tab.Navigator
        initialRouteName="HOME"
        screenOptions={{headerShown: false, tabBarStyle: {display: 'none'}}}>
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="LOGS" component={DrivingLogs} />
        <Tab.Screen name="SETTINGS" component={Setting} />
        <Tab.Screen name="ACCOUNT" component={Account} />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
