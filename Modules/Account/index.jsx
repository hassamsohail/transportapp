import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLOR} from '../../Constant/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';
import IconFo from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

const {height} = Dimensions.get('window');
const Account = () => {
  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
        marginVertical: 20,
      }}>
      <View
        style={{
          paddingHorizontal: 20,
          width: '100%',
          height: '100%',
          minHeight: height,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Poppins-SemiBold',
            color: COLOR.mainColor,
          }}>
          Account
        </Text>
        <View style={{marginTop: 10}}>
          <View
            style={{
              backgroundColor: 'white',
              elevation: 4,
              borderRadius: 10,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
            }}>
            <Image
              style={{borderRadius: 100, width: 80, height: 80}}
              source={require('../../assets/images/avatar.png')}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 20,
                }}>
                Muhammad Ashir
              </Text>
              <Text
                style={{
                  color: '#818181',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                  marginTop: -8,
                }}>
                Desk Trader
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              padding: 10,
              backgroundColor: 'white',
              marginTop: 12,
              elevation: 4,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // borderBottomWidth: 2,
                paddingBottom: 3,
                marginTop: 10,
                // borderColor: '#EFEBE9',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <IconFo
                  name="drivers-license-o"
                  size={25}
                  color={COLOR.color2}
                />
                <Text
                  style={{
                    color: '#454545',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                  }}>
                  Drivers License
                </Text>
              </View>
              <IconF name="chevron-right" size={25} color="#A7A7A7" />
            </TouchableOpacity>
            <View style={{width:"100%",height:1,backgroundColor:"#EFEBE9"}} />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 3,
                marginTop: 10,
                // borderColor: '#EFEBE9',
                // borderBottomWidth: 2,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <IconM
                  name="certificate-outline"
                  size={25}
                  color={COLOR.color2}
                />
                <Text
                  style={{
                    color: '#454545',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                  }}>
                  Certificates
                </Text>
              </View>
              <IconF name="chevron-right" size={25} color="#A7A7A7" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({});
