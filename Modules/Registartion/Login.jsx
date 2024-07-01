import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {LinearGradient} from 'react-native-gradients';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const Login = () => {
  const [employeeID, setEmployeeID] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!employeeID.trim()) {
      Alert.alert('Validation Error', 'Employee ID is required.');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Validation Error', 'Password is required.');
      return;
    }

    setLoading(true);

    let data = JSON.stringify({
      employeeID: employeeID,
      password: password,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://road-king.azurewebsites.net/api/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        Alert.alert('Login Successful', 'You have logged in successfully!');
        navigation.navigate('TAB'); // Change this to your desired screen
      })
      .catch(error => {
        console.log(error);
        Alert.alert(
          'Login Failed',
          'Please check your credentials and try again.',
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={{height: '100%'}}>
      <View style={{width: '100%', height: height / 2.9}}>
        <LinearGradient
          colorList={[
            {offset: '0%', color: '#F07F21', opacity: '1'},
            {offset: '77.6%', color: '#FFB679', opacity: '1'},
          ]}
          angle={260}
        />
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
          height: height / 1.4,
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
          <Image source={require('../../assets/images/user1.png')} />
        </View>
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
              fontFamily: 'Poppins-Black',
            }}>
            Insert your received code
          </Text>
          <Text
            style={{
              fontSize: 12,
              textTransform: 'capitalize',
              fontWeight: '400',
              color: '#356A81',
              alignSelf: 'flex-start',
              fontFamily: 'Poppins-Regular',
            }}>
            Please provide the given code in the box below to setup and load
            your account
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
              Insert user ID{' '}
            </Text>
            <TextInput
              style={{
                height: 50,
                backgroundColor: 'white',
                paddingHorizontal: 10,
                borderRadius: 5,
                fontSize: 18,
              }}
              placeholder="Enter your ID"
              value={employeeID}
              onChangeText={setEmployeeID}
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
              Insert code{' '}
            </Text>
            <TextInput
              secureTextEntry={true}
              style={{
                height: 50,
                backgroundColor: 'white',
                paddingHorizontal: 10,
                borderRadius: 5,
                fontSize: 18,
              }}
              placeholder="Insert code"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View
            style={{
              marginTop: 20,
              marginBottom: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#356A81', fontSize: 16 }}>
              Don't have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate('Registartion')}>
              <Text style={{ color: '#F07F21', fontSize: 16, marginLeft: 5 }}>
              Registration here
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 80,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {loading ? (
              <ActivityIndicator size="large" color="#F07F21" />
            ) : (
              <Button text="Continue" onPress={handleLogin} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
