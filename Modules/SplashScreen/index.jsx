import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {LinearGradient} from 'react-native-gradients';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  // background: linear-gradient(166deg, #193A53 18.49%, #356A81 98.57%);
  const colorList = [
    {offset: '18.49%', color: '#193A53', opacity: '1'},
    {offset: '98.57%', color: '#356A81', opacity: '1'},
  ];
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('GET_START');
    }, 3000);
  }, []);
  return (
    <View>
      <View style={{width: '100%', height: '100%', position: 'absolute'}}>
        <LinearGradient colorList={colorList} angle={332} />
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/images/r.png')} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
