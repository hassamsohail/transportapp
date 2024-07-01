import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-gradients';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const GetStart = () => {
  const colorList = [
    {offset: '0%', color: '#F07F21', opacity: '1'},
    {offset: '77.6%', color: '#FFB679', opacity: '1'},
  ];
  const colorList2 = [
    {offset: '18.49%', color: '#193A53', opacity: '1'},
    {offset: '92.57%', color: '#356A81', opacity: '1'},
  ];
  const navigation = useNavigation();
  return (
    <View style={{height: '100%'}}>
      <View style={{width: '100%', height: height / 1.5}}>
        <LinearGradient colorList={colorList} angle={260} />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            // justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: height / 1.8}}
            resizeMode="contain"
            source={require('../../assets/images/mainTruck.png')}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#193A53',
          height: height / 2.3,
          position: 'absolute',
          bottom: 0,
        }}>
        {/* <LinearGradient colorList={colorList2} angle={260} /> */}
        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 15,
            position: 'relative',
            height: '100%',
            width: '100%',
            // alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '800',
              color: 'white',
              // alignSelf: 'center',
              fontFamily:"Poppins-Black"
            }}>
            Logistic Platform Make Fleet
          </Text>
          <Text
            style={{
              fontSize: 20,
              textTransform: 'capitalize',
              marginTop: 10,
              fontWeight: '400',
              color: 'white',
              // alignSelf: 'center',
              fontFamily:"Poppins-Regular"
            }}>
            management & build a bridge between shipper & driver
          </Text>
        </View>
          <View
            style={{
              position: 'absolute',
              bottom: 30,
              width: '100%',
              paddingHorizontal: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              text="Continue"
              onPress={() => navigation.navigate('LOGIN')}
            />
          </View>
      </View>
    </View>
  );
};

export default GetStart;

const styles = StyleSheet.create({});
