import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const WelcomePage = () => {
  const navigation = useNavigation()
  return (
    <View
      style={{width, height, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../../assets/images/checkLogo.png')} />
      <Text
        style={{
          fontSize: 24,
          fontFamily: 'Poppins-Bold',
          width: '80%',
          textAlign: 'center',
          textTransform: 'capitalize',
          color: '#193A53',
        }}>
        Your account was successfully created
      </Text>
      <View style={{width: '100%', paddingHorizontal: 15, marginTop: 20}}>
        <Button text="Go to Home Page" onPress={()=>navigation.navigate("TAB")}  />
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({});
