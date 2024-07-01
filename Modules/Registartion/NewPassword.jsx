import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-gradients';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const NewPassword = () => {
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
      <View style={{width: '100%', height: height / 2.7}}>
        <LinearGradient colorList={colorList} angle={260} />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: height / 4, width: width / 2}}
            resizeMode="contain"
            source={require('../../assets/images/logo2.png')}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#193A53',
          height: height / 1.5,
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: 'white',
            borderRadius: 100,
            marginTop: -30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/images/lock.png')} />
        </View>
        {/* <LinearGradient colorList={colorList2} angle={260} /> */}
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 15,
            position: 'relative',
            height: '100%',
            width: '100%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '800',
              color: '#F07F21',
              alignSelf: 'flex-start',
              fontFamily:"Poppins-Black"
            }}>
            Create new password
          </Text>
          <Text
            style={{
              fontSize: 14,
              textTransform: 'capitalize',
              fontWeight: '400',
              color: '#356A81',
              alignSelf: 'flex-start',
              fontFamily:"Poppins-Regular"
            }}>
            Please create your own password for your personalized account
          </Text>
          <View style={{width: '100%', marginTop: 10}}>
            <Text
              style={{
                fontSize: 20,
                textTransform: 'capitalize',
                fontWeight: '400',
                color: 'white',
                marginBottom: 5,
              }}>
              New password{' '}
            </Text>
            <TextInput
            secureTextEntry={true}
              style={{
                height: '100%',
                height: 50,
                backgroundColor: 'white',
                paddingHorizontal: 10,
                borderRadius: 5,
                fontSize: 18,
              }}
              placeholder="New password"
            />
          </View>
          <View style={{width: '100%', marginTop: 10}}>
            <Text
              style={{
                fontSize: 20,
                textTransform: 'capitalize',
                fontWeight: '400',
                color: 'white',
                marginBottom: 5,
              }}>
              confirm Password{' '}
            </Text>
            <TextInput
            secureTextEntry={true}
              style={{
                height: '100%',
                height: 50,
                backgroundColor: 'white',
                paddingHorizontal: 10,
                borderRadius: 5,
                fontSize: 18,
              }}
              placeholder="confirm Password"
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 80,
              width: '100%',
              // paddingHorizontal: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button text="Continue" onPress={() => navigation.navigate('ACCOUTN_DETAILS')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewPassword;

const styles = StyleSheet.create({});
